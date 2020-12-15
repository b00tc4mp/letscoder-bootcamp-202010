const { retrieveLives } = require("../../../logic/");
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

    // if (user.role === 'ARTIST') {
    //     const artistId = userId
    //   }
    //   else {
    //     const promoterId = userId
    //   }

    retrieveLives(userId)
      .then((lives) => res.status(200).json(lives))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};