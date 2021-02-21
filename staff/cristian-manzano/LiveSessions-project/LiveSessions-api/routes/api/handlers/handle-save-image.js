const Busboy = require("busboy");
const { saveUserImage } = require("../../../logic");

module.exports = (req, res, handleError) => {
  const {
    params: { userId },
  } = req;
debugger
  const busboy = new Busboy({ headers: req.headers });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
  debugger
    saveUserImage(userId, file)
      .then(() => res.status(204).send())
      .catch(handleError)
  });

  req.pipe(busboy);
};