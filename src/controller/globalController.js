import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getLandingPage = (req, res) => {
  res.render("landingPage", { landingPage: true });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.dashboard,
});

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.root);
    }
  }
};

export const getLogout = (req, res) => {
  req.logout();
  res.redirect(routes.landingPage);
};

export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${routes.changePassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.myProfile);
  } catch (error) {
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
  }
};

export const getGoogleLogin = passport.authenticate("google", {
  scope: ["profile"],
});

export const googleLoginCallback = async (_, __, profile, cb) => {
  console.log(profile);
  const {
    _json: { sub, picture, name },
  } = profile;
  // TODO: temporary fake email with regex to remove space between given_name and family_name
  // very critical bug since if the google authentication returns people with identical names,
  // the googleID gets overwritten and the pre-existing user gets deleted from the database
  // const email = `${name.replace(/\s/g, "")}@gmail.com`;
  const email = `${sub}@gmail.com`;
  // decided to create fake email with googleID
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleID = sub;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      name,
      email,
      avatarUrl: picture,
      googleID: sub,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGoogleLogin = (req, res) => {
  res.redirect(routes.dashboard);
};

export const getSettings = (req, res) => {
  res.render("settings", { pageTitle: "Settings", loggedUser: true });
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", {
    pageTitle: "edit Profile",
    loggedUser: true,
  });
};

// TODO: Add POST Profile Edit
export const postEditProfile = (req, res) => {};
