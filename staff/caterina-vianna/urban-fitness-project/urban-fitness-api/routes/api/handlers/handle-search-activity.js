const { searchActivity } = require("../../../logic");
const jwt = require("jsonwebtoken");

const {
  env: { JWT_SECRET },
} = process;

module.exports = (req, res, handleError) => {
  debugger;

  const {
    query: { querySports },
  } = req;

  //const token = authorization.replace('Bearer ', '')

  try {
    //const { sub: userId } = jwt.verify(token, JWT_SECRET)
    debugger;
    console.log(querySports);
    searchActivity(querySports)
      .then((activities) => res.status(200).json(activities))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
