const { findGames } = require("../../../logic");

/* const jwt = require("jsonwebtoken");

const {
  env: { JWT_SECRET }
} = process; */

module.exports = (req, res, handleError) => {

 
  const {
    body: { query, gameconsole, budget, priceMin, priceMax }
  } = req;

  //let shelterId

  /* if (token) {
    const { sub } = jwt.verify(token, JWT_SECRET);
    shelterId = sub
  } else {
    const shelterId = undefined;
  }
 */
  try {
    findGames(query, gameconsole, budget, priceMin, priceMax )
      .then((game) => res.status(200).json(game))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};