export const getHome = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const getResetPassword = (req, res) => {
  res.render("resetPassword", { pageTitle: "Reset Password" });
};

export const getSettings = (req, res) => {
  res.render("settings", { pageTitle: "Settings" });
};
