export const profile = (req, res) => res.render("seeUser", {pageTitle: "see user", id: req.params.id});

export const edit = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});

export const join = (req, res) => res.render("join", {pageTitle: "Join"});

export const login = (req, res) => res.render('login', {pageTitle: "Log In"});

export const seeUsers = (req, res) => res.render("seeUsers", {pageTitle: "See Users"});

