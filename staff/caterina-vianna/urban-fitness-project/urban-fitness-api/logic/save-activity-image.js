const { validateId } = require("./helpers/validations");
const path = require("path");
const fs = require("fs");

module.exports = (activityId, stream) => {
  debugger;
  validateId(activityId);
  /*  validateStream(stream); */

  return new Promise((resolve, reject) => {
    try {
      const toStream = fs.createWriteStream(
        path.join(__dirname, `../data/activity/${activityId}.jpg`)
      );
      //path.join(__dirname, `../data/activity/${activityId}.jpg`)
      stream.pipe(toStream);

      stream.once("end", resolve);
    } catch (error) {
      reject(error);
    }
  });
};
