const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // due to the nature of middlewares, we want this to only run
  //    upon successful fetch to a given route, therefore,
  //    the following line will wait for it to complete and call next()
  await next();

  clearHash(req.user.id);
};
