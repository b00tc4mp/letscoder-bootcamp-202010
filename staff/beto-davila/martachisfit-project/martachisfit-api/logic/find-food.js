const { validateQuery } = require('./helpers/validations')
const { models: { Food } } = require('martachisfit-data')
const { NotFoundError } = require('../errors')

module.exports = query => {

    validateQuery(query)

    const cursor = Food.find({ $or: [{ name: new RegExp(query, 'i') }] })
    return cursor.lean()
        .then(food => {

            if (food)
                return food
            else
                throw new NotFoundError('No results')
        })

}