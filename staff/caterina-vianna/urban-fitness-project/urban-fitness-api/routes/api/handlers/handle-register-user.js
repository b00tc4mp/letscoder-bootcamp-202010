const { registerUser } = require("../../logic");

module.exports = (req, res, handleError) => {
  const {
    body: { firstName, lastName, email, password },
  } = req;

  try {
    registerUser(firstName, lastName, email, password)
      .then(() => res.status(201).send())
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
