const Busboy = require("busboy");
const { saveActivityImage } = require("../../../logic");

module.exports = (req, res, handleError) => {
  const {
    params: { activityId },
  } = req;

  const busboy = new Busboy({ headers: req.headers });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) =>
    saveActivityImage(activityId, file)
      .then(() => res.status(204).send())
      .catch(handleError)
  );

  req.pipe(busboy);
};
