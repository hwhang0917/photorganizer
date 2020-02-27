// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const RESET_PASSWORD = "/reset-password";
const SETTINGS = "/settings";

// Dashboardz
const DASHBOARD = "/dashboard";
const DASHBOARD_HOME = "/:id";
const IMAGE_DETAIL = "/:id/image/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  resetPassword: RESET_PASSWORD,
  settings: SETTINGS,
  dashboard: DASHBOARD,
  dashboardHome: id => {
    if (id) {
      return `/dashboard/${id}`;
    } else {
      return DASHBOARD_HOME;
    }
  },
  imageDetail: id => {
    if (id) {
      return `/images/${id}`;
    } else {
      return IMAGE_DETAIL;
    }
  }
};

export default routes;
