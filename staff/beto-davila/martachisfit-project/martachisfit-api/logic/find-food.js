const { validateQuery } = require('./helpers/validations')
const { Food } = require('../models')
// const { NotFoundError } = require('../errors')

module.exports = query => {

    validateQuery(query)

    const cursor = Food.find({ $or: [{ name: new RegExp(query, 'i') }] })
        return cursor.lean()
            //.toArray()
            .then(food => {

            if(food) {
                // delete food[0]._id
                return food
            }
            else
                throw new Error('No results')
    })

}