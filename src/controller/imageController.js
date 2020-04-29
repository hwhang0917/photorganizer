import Image from "../models/Image";

export const getImageDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  console.log(id);
  try {
    const image = await Image.findById(id).populate("owner");
    res.render("imageDetail", {
      pageTitle: "Image Detail",
      image,
      loggedIn: true,
    });
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "404" });
  }
};

export const getImageEdit = (req, res) => {
  res.render("imageEdit", { pageTitle: "Iamge  Edit" });
};
