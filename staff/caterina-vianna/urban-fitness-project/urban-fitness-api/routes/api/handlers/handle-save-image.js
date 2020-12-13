const Busboy = require("busboy");
const { saveNoteImage } = require("../../../logic");

module.exports = (req, res, handleError) => {
  const {
    params: { noteId },
  } = req;

  const busboy = new Busboy({ headers: req.headers });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) =>
    saveNoteImage(noteId, file)
      .then(() => res.status(204).send())
      .catch(handleError)
  );

  req.pipe(busboy);
};
