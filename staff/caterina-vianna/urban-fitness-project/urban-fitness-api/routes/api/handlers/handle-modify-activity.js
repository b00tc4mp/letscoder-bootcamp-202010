const { modifyLive } = require("../../../logic");
const modifyActivity = require("../../../logic/modify-activity");

module.exports = (req, res, handleError) => {
  debugger;
  const {
    body: {
      activityId,
      title,
      description,
      price,
      checked,
      address,
      sport,
      repeat,
      spots,
      selectedItems,
      duration,
    },
  } = req;
  debugger;
  try {
    modifyActivity(
      activityId,
      title,
      description,
      price,
      checked,
      address,
      sport,
      repeat,
      spots,
      selectedItems,
      duration
    )
      .then(() => {
        return res.status(204).send();
      })
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
