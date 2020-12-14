const { validateId } = require("./helpers/validations");
const path = require("path");
const fs = require("fs");

module.exports = (userId, stream) => {
  
  validateId(userId);
  /*  validateStream(stream); */

  return new Promise((resolve, reject) => {
    debugger
    try {
      const toStream = fs.createWriteStream(
        path.join(__dirname, `../data/users/${userId}.jpg`)
      );
debugger
      stream.pipe(toStream);

      stream.once("end", resolve);
    } catch (error) {
      reject(error);
    }
  });
};