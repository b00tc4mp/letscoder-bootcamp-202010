const { findPets } = require("../../../logic");

const jwt = require("jsonwebtoken");


const {
  env: { JWT_SECRET }
} = process;

module.exports = (req, res, handleError) => {

 
  const {
    body: { token, queryShelter, city, queryPet, species, breed }
  } = req;

  let shelterId

  if (token) {
    const { sub } = jwt.verify(token, JWT_SECRET);
    shelterId = sub
  } else {
    const shelterId = undefined;
  }

  try {
    findPets(shelterId, queryShelter, city, queryPet, species, breed)
      .then((pet) => res.status(200).json(pet))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
