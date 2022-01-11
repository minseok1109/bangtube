export const trending = (req, res) => res.render("home", {pageTitle: "Home"});
export const see = (req, res) => {
  return res.render("watch", {pageTitle: "see"});
};
export const edit = (req, res) => {
  return res.render("Edit", {pageTitle: "Edit Video", id: req.params.id});
};

export const search = (req, res) => res.render("Search", {pageTitle: "Search"});
export const upload = (req, res) => res.render("Upload", {pageTitle: "Upload Video"});
export const deleteVideo = (req, res) => {
  return res.render("Delete Video", {pageTitle: "Delete Video"});
};
