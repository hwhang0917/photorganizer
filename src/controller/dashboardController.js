export const getDashboard = (req, res) => {
  res.render("dashboard", { pageTitle: "Dashboard" });
};

export const getImageDetail = (req, res) => {
  res.render("imageDetail", { pageTitle: "Image" });
};
