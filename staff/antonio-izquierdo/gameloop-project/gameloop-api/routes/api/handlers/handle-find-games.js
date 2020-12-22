const { findGames } = require("../../../logic");

module.exports = (req, res, handleError) => {

  const {
    query: { query, gameconsole, budget, priceMin, priceMax }
  } = req;

  try {
    findGames(query || undefined, gameconsole || undefined, budget ? Number(budget) : undefined, priceMin ? Number(priceMin) : undefined, priceMax ? Number(priceMax) : undefined )
      .then((game) => res.status(200).json(game))
      .catch(handleError);
  } catch (error) {
    handleError(error);
  }
};