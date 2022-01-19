import Video from "../models/Video.js";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Hom e", videos });
  } catch (error) {
    return res.render("error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch");
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("editVideo", {
    pageTitle: `Editing`,
  });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title, description, hastags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hastags: hastags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  return res.render("deleteVideo", { pageTitle: "Delete Video" });
};
