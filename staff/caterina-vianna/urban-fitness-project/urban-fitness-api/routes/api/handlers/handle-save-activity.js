const jwt = require("jsonwebtoken");
const saveActivity = require("../../../logic/save-activity");

const {
  env: { JWT_SECRET },
} = process;

module.exports = (req, res, handleError) => {
  const {
    headers: { authorization },
    body: {
      activityId,
      title,
      description,
      checked,
      address,
      sport,
      repeat,
      spots,
      activityDate,
    },
  } = req;

  // Bearer <token>
  const token = authorization.replace("Bearer ", "");

  try {
    const { sub: ownerId } = jwt.verify(token, JWT_SECRET);

    saveActivity(
      ownerId,
      activityId,
      title,
      description,
      checked,
      address,
      sport,
      repeat,
      spots,
      activityDate
    )
      .then((activityId) => res.status(200).send({ activityId }))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
