const { findPets } = require("../../../logic");

const jwt = require("jsonwebtoken");


const {
  env: { JWT_SECRET }
} = process;

module.exports = (req, res, handleError) => {

  let { headers: {authorization},
    query: { queryShelter, city, queryPet, species, breed }
  } = req;

  
  let shelterId = null
  
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    if (token !== 'undefined'){
    const { sub } = jwt.verify(token, JWT_SECRET);
    shelterId = sub
  }
  } 

  try {
    findPets(shelterId, queryShelter, city, queryPet, species, breed)
      .then((pet) => res.status(200).json(pet))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};
