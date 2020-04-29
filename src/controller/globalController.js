import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getLandingPage = (req, res) => {
  res.render("landingPage", { landingPage: true });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// TODO: Add POST Join
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    req.flash("error", "Passwords don't match");
    console.log("PW not match");
    res.status(400); // Bad Request
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      console.log("Registered");
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

// TODO: Add POST Login
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.dashboard,
  successFlash: "Welcome!",
  failureFlash: "Can't log in. Check email and/or password",
});

export const getLogout = (req, res) => {
  req.flash("info", "Logged Out. See you later!");
  req.logout();
  res.redirect(routes.root);
};

export const googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleLoginCallback = async (_, __, profile, cb) => {
  const { id, displayName: name } = profile;
  const email = profile.emails[0].value;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      name,
      email,
      googleId: id,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGoogleLogin = (req, res) => {
  res.redirect(routes.dashboard);
};

export const getResetPassword = (req, res) => {
  res.render("resetPassword", { pageTitle: "Reset Password" });
};

// TODO: Add POST Reset Password
export const postResetPassword = (req, res) => {};

export const getSettings = (req, res) => {
  res.render("settings", { pageTitle: "Settings", loggedIn: true });
};

export const getUpdateProfile = (req, res) => {
  res.render("updateProfile", { pageTitle: "Update Profile", loggedIn: true });
};

// TODO: Add POST Profile Update
export const postUpdateProfile = (req, res) => {};
