const { retrieveActivity } = require("../../../logic/");
const jwt = require("jsonwebtoken");

const {
  env: { JWT_SECRET },
} = process;

module.exports = (req, res, handleError) => {
  const {
    headers: { authorization },
  } = req;

  // Bearer <token>
  const token = authorization.replace("Bearer ", "");

  try {
    const { sub: userId } = jwt.verify(token, JWT_SECRET);

    retrieveActivity(userId)
      .then((activities) => res.status(200).json(activities))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
