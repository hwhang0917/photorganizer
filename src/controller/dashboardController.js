export const getDashboard = (req, res) => {
  res.render("dashboard", { pageTitle: "Dashboard" });
};

export const getFilter = (req, res) => {
  const {
    query: { term }
  } = req;
  res.render("filter", { pageTitle: `Filtering by ${term}`, term });
};
