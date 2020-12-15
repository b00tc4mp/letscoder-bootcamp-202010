const { validateQuery, validatePrice, validateGameconsole} = require('./helpers/validations')
const { models: { Game } } = require('gameloop-data')


module.exports = function (query, gameconsole, budget, priceMin, priceMax) {
    if (typeof query !== 'undefined') validateQuery(query)
    if (typeof gameconsole !== 'undefined')validateGameconsole(gameconsole)
    if (typeof budget !== 'undefined')validatePrice(budget)
    if (typeof priceMin !== 'undefined')validatePrice(priceMin)
    if (typeof priceMax !== 'undefined')validatePrice(priceMax)
    
    const criteria = {}

    /*if (userId)
        criteria._id = ObjectId(userId)
  */
    /*  return User.find(criteria).lean()
 
         .then(users => {
             const ids = users.map(({ _id }) => _id)
 
             console.log(ids)
 
             const criteria = {
                 owner: { $in: ids }
             }
  */
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