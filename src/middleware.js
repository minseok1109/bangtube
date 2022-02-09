const middleware = (req, res) => {
  req.locals.loggedIn = req.session.loggedIn;
  req.locals.user = req.session.user;
};

export default middleware;
