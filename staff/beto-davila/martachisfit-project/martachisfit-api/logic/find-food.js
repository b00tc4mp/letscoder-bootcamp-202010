const { validateQuery } = require('./helpers/validations')
const { models: { Food } } = require('martachisfit-data')
const { NotFoundError } = require('martachisfit-errors')

/**
 * Retrieves food that match a query criteria
 * 
 * @param {string} query query to find the food
 * 
 * @returns {Array} Array representing the food element meeting the query criteria. Otherwise, empty array.
 * 
 */

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