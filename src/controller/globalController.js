export const getLandingPage = (req, res) => {
  res.render("landingPage", { landingPage: true });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

// TODO: Add POST Login
export const postLogin = (req, res) => {};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const getResetPassword = (req, res) => {
  res.render("resetPassword", { pageTitle: "Reset Password" });
};

// TODO: Add POST Reset Password
export const postResetPassword = (req, res) => {};

// TODO: Add POST Join
export const postJoin = (req, res) => {};

export const getSettings = (req, res) => {
  res.render("settings", { pageTitle: "Settings" });
};

export const getUpdateProfile = (req, res) => {
  res.render("updateProfile", { pageTitle: "Update Profile" });
};

// TODO: Add POST Profile Update
export const postUpdateProfile = (req, res) => {};
