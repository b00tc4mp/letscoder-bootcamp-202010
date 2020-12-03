const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Game } = require('../models')

module.exports = function (userId, query, budget, priceMin, priceMax, console) {
    //poner validations

    const criteria = {}

    if (userId)
        criteria._id = ObjectId(userId)

    if (query)
        criteria.$or = [
            { name: { $regex: new RegExp(query, 'i') } },
            { email: { $regex: new RegExp(query, 'i') } },
        ]

    if (budget >= 0)
        criteria.budget = budget
    else
        if (priceMin >= 0 && typeof priceMax === 'undefined')
            criteria.budget = { $gte: priceMin }
        else if (priceMax >= 0 && typeof priceMin === 'undefined')
            criteria.budget = { $lte: priceMax }
        else if (priceMin >= 0 && priceMax >= priceMin)
            criteria.budget = { $gte: priceMin, $lte: priceMax }

    return User.find(criteria).lean()

        .then(users => {
            const ids = users.map(({ _id }) => _id)

            console.log(ids)

            const criteria = {
                userId: { $in: ids }
            }
            
                if (console)
                    criteria.console = { $regex: new RegExp(console, 'i') } 

            return Game.find(criteria).lean()
        })
        .then(games => {
            games.forEach(game => {
                const { _id } = game

                game.id = _id.toString()

                delete game._id
            })

            return games
        })
} 