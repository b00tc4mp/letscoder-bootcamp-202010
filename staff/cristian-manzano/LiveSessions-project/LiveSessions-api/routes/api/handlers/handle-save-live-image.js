const Busboy = require("busboy");
const { saveLiveImage } = require("../../../logic");

module.exports = (req, res, handleError) => {
  const {
    params: { liveId },
  } = req;
debugger
  const busboy = new Busboy({ headers: req.headers });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
  debugger
    saveLiveImage(liveId, file)
      .then(() => res.status(204).send())
      .catch(handleError)
  });

  req.pipe(busboy);
};