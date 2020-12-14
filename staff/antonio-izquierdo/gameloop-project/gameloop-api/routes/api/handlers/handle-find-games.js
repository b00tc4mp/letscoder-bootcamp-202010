const { findGames } = require("../../../logic");

/* const jwt = require("jsonwebtoken");

const {
  env: { JWT_SECRET }
} = process; */

module.exports = (req, res, handleError) => {

  const {
    query: { query, gameconsole, budget, priceMin, priceMax }
  } = req;

  //let userId

  /* if (token) {
    const { sub } = jwt.verify(token, JWT_SECRET);
    userId = sub
  } else {
    const userId = undefined;
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