const ROOT = "/";

// Global Routes
const LANDING_PAGE = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const CHANGE_PASSWORD = "/change-password";
const MY_PROFILE = "/my-profile";

// Social Login
const GOOGLE_LOGIN = "/auth/google";
const GOOGLE_CB = "/auth/google/callback";

// Settings Routes
const SETTINGS = "/settings";
const EDIT_PROFILE = "/edit-profile";

// Dashboard
const DASHBOARD = "/dashboard";
const DASHBOARD_ROOT = "/";
const FILTER = "/filter"; // "/dashboard/filter"

// Images
const IMAGE = "/image";
const IMAGE_UPLOAD = "/upload"; // "image/upload"
const IMAGE_DETAIL = "/:id"; // "/image/:id"
const IMAGE_EDIT = "/:id/edit"; // "/image/:id/edit"
const IMAGE_DELETE = "/:id/delete"; // "/image/:id/delete"

const routes = {
  root: ROOT,
  landingPage: LANDING_PAGE,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  myProfile: MY_PROFILE,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  googleLogin: GOOGLE_LOGIN,
  googleCallback: GOOGLE_CB,
  settings: SETTINGS,
  dashboard: DASHBOARD,
  dashboardRoot: DASHBOARD_ROOT,
  filter: FILTER,
  image: IMAGE,
  imageUpload: IMAGE_UPLOAD,
  imageDetail: (id) => {
    if (id) {
      return `/image/${id}`;
    } else {
      return IMAGE_DETAIL;
    }
  },
  imageEdit: (id) => {
    if (id) {
      return `/image/${id}/edit`;
    } else {
      return IMAGE_EDIT;
    }
  },
  imageDelete: (id) => {
    if (id) {
      return `/image/${id}/delete`;
    } else {
      return IMAGE_DELETE;
    }
  },
};

export default routes;
