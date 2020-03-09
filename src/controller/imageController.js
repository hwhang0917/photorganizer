export const getImageDetail = (req, res) => {
  res.render("imageDetail", { pageTitle: "Image Detail" });
};

export const getImageEdit = (req, res) => {
  res.render("imageEdit", { pageTitle: "Iamge  Edit" });
};
