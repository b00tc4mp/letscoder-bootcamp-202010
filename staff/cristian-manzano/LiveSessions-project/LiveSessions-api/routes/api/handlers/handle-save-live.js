// const jwt = require("jsonwebtoken");
const { saveLive } = require("../../../logic");

// const {
//   env: { JWT_SECRET },
// } = process;

module.exports = (req, res, handleError) => {
  const {
    // headers: { authorization },
    body: {
        promoterId,
        artistId,
        liveId,
        title, 
        liveDate, 
        status, 
        duration, 
        payment, 
        description,
    },
  } = req;

  // Bearer <token>
//   const token = authorization.replace("Bearer ", "");

  try {
    // const { sub: ownerId } = jwt.verify(token, JWT_SECRET);
    debugger;
    saveLive(
        promoterId,
        artistId,
        liveId,
        title, 
        liveDate, 
        status, 
        duration, 
        payment, 
        description,
    )
      .then((liveId) => res.status(200).send({ liveId }))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};