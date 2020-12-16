const { retrieveActivityImage } = require("../../../logic");

module.exports = (req, res, handleError) => {
  const {
    params: { activityId },
  } = req;

  try {
    retrieveActivityImage(activityId).then((stream) => {
      res.setHeader("Content-type", "image/jpeg");

      stream.pipe(res);

      stream.on("error", handleError);
    });
  } catch (error) {
    handleError(error);
  }
};
