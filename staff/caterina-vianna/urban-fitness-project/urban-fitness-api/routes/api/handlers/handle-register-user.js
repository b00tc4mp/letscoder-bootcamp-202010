const { registerUser } = require("../../../logic");

module.exports = (req, res, handleError) => {
  debugger;
  const {
    body: { firstName, lastName, email, password },
  } = req;
  debugger;
  try {
    registerUser(firstName, lastName, email, password)
      .then(() => {
        debugger;
        return res.status(201).send();
      })
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
