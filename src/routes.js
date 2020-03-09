const ROOT = "/";

// Global Routes
const LANDING_PAGE = "/";
const LOGIN = "/login";
const JOIN = "/join";
const RESET_PASSWORD = "/reset-password";

// Social Login
const GOOGLE_LOGIN = "/auth/google";
const GOOGLE_CB = "/auth/google/callback";

// Settings Routes
const SETTINGS = "/settings";
const UPDATE_PROFILE = "/update-profile";

// Dashboard
const DASHBOARD = "/dashboard";
const DASHBOARD_ROOT = "/";
const FILTER = "/filter"; // "/dashboard/filter"

// Images
const IMAGE = "/image";
const IMAGE_DETAIL = "/:id"; // "/image/:id"
const IMAGE_EDIT = "/:id/edit"; // "/image/:id/edit"

const routes = {
  root: ROOT,
  landingPage: LANDING_PAGE,
  login: LOGIN,
  join: JOIN,
  resetPassword: RESET_PASSWORD,
  googleLogin: GOOGLE_LOGIN,
  googleCallback: GOOGLE_CB,
  settings: SETTINGS,
  updateProfile: UPDATE_PROFILE,
  dashboard: DASHBOARD,
  dashboardRoot: DASHBOARD_ROOT,
  filter: FILTER,
  image: IMAGE,
  imageDetail: id => {
    if (id) {
      return `/image/${id}`;
    } else {
      return IMAGE_DETAIL;
    }
  },
  imageEdit: id => {
    if (id) {
      return `/image/${id}/edit`;
    } else {
      return IMAGE_EDIT;
    }
  }
};

export default routes;
