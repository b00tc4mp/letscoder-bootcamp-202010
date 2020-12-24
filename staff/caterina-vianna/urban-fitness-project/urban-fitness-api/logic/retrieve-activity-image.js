const fs = require("fs");
const path = require("path");
const { validateId } = require("./helpers/validations");
const { promises: fsp } = fs;

module.exports = (activityId) => {
  validateId(activityId);

  const file = path.join(__dirname, `../data/activity/${activityId}.jpg`);

  return fsp
    .access(file, fs.constants.F_OK)
    .then(() => fs.createReadStream(file))
    .catch(() =>
      fs.createReadStream(
        path.join(__dirname, "../data/activity/5fd90381d7d63f1c7c294310.jpg")
      )
    );
};
