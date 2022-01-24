import User from "../models/User.js";
import bcrypt from "bcrypt";

export const profile = (req, res) =>
  res.render("seeUser", { pageTitle: "see user", id: req.params.id });

export const edit = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

//Join
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { username, name, email, password, password2 } = req.body;
  const exists = await User.exists({
    $or: [{ username }, { name }, { email }],
  });
  const pageTitle = "Join";

  //check password
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "check your password",
    });
  }

  //check if username/name is already taken
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "username/name/email is already taken",
    });
  }
  try {
    await User.create({
      username,
      name,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};

//Log In
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  //check username is existed
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Log In",
      errorMessage: "Username is not existed",
    });
  }

  //check password is correct
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    if (!ok) {
      return res.status(400).render("login", {
        pageTitle: "Log In",
        errorMessage: "Check your password",
      });
    }
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
