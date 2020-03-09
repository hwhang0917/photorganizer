export const getDashboard = (req, res) => {
  res.render("dashboard", { pageTitle: "Dashboard" });
};

export const getFilter = (req, res) => {
  let term = "test";
  res.render("filter", { pageTitle: `${term}` });
};
