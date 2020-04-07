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
