// General
const HOME = "/";
const SETTINGS = "/settings";

// User
const JOIN = "/join";
const LOGIN = "/login";
const RESET_PASSWORD = "/reset-password";

// Dashboard
const DASHBOARD = "/dashboard/:id";
const IMAGE_DETAIL = "/images/:id";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  resetPassword: RESET_PASSWORD,
  dashboard: id => {
    if (id) {
      return `/dashboard/${id}`;
    } else {
      return DASHBOARD;
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
