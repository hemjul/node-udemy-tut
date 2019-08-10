exports.error404Handler = (req, res, next) => {
  res.status(404).render("error404", { pageTitle: "Not Found", path: "/" });
};
