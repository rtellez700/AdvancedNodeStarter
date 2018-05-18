const mongoose = require("mongoose");
const User = mongoose.model("User");

/**
 * @returns {Promise}
 */
module.exports = () => {
  return new User({}).save();
};
