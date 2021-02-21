const { validateQuery, validatePrice, validateGameConsole} = require('./helpers/validations')
const { models: { Game } } = require('gameloop-data')

/**
 * Retrieves games that match a query criteria
 * 
 * @param {String} query identification by name and description
 * @param {String} gameConsole console types of each game
 * @param {String} budget price of each game
 * @param {String} priceMin filter by Min. price
 * @param {string} priceMax filter by Max. price
 * 
 * @returns {Array} Array representing the games matching the queries criteria. Otherwise, empty array.
 * 
 */

module.exports = function (query, gameconsole, budget, priceMin, priceMax) {
    if (typeof query !== 'undefined') validateQuery(query)
    if (typeof gameconsole !== 'undefined')validateGameConsole(gameconsole)
    if (typeof budget !== 'undefined')validatePrice(budget)
    if (typeof priceMin !== 'undefined')validatePrice(priceMin)
    if (typeof priceMax !== 'undefined')validatePrice(priceMax)
    
    const criteria = {}

    if (query)
        criteria.$or = [
            { name: { $regex: new RegExp(query, 'i') } },
            { description: { $regex: new RegExp(query, 'i') } }
        ]

    if (budget >= 0)
        criteria.budget = budget
    else if (priceMin >= 0 && typeof priceMax === 'undefined')
        criteria.budget = { $gte: priceMin }
    else if (priceMax >= 0 && typeof priceMin === 'undefined')
        criteria.budget = { $lte: priceMax }
    else if (priceMin >= 0 && priceMax >= priceMin)
        criteria.budget = { $gte: priceMin, $lte: priceMax }

    if (gameconsole)
        criteria.gameconsole = { $regex: new RegExp(gameconsole, 'i') }

    return Game.find(criteria).lean().then(games => {
        games.forEach(game => {
            const { _id } = game

            game.id = _id.toString()

            delete game._id
            delete game.__v
        })

        return games
    })
}