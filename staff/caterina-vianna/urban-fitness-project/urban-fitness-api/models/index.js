const { model } = require("mongoose");
const { user, activity } = require("./schemas");

module.exports = {
  User: model("User", user),
  Activity: model("Activity", activity),
};
