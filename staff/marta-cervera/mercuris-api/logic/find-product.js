const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Product } = require('../models')

module.exports = function (userId, queryCompany,queryProduct, price, priceMin,priceMax) {
    //poner validations
    
    const criteria = {}

    if (userId)
        criteria._id = ObjectId(userId)

    if (queryCompany)
        criteria.$or = [

            { name: { $regex: new RegExp(queryCompany, 'i') } },
            { email: { $regex: new RegExp(queryCompany, 'i') } },
            { contact: { $regex: new RegExp(queryCompany, 'i') } }
        ]   


    return User.find(criteria).lean()
        .then(users => {
            const ids = users.map(({ _id }) => _id)

            console.log(ids)

            const criteria = {
                owner : { $in: ids }
            }
            if (queryProduct)
            criteria.$or = [
                { name: { $regex: new RegExp(queryProduct, 'i') } },
                { description: { $regex: new RegExp(queryProduct, 'i') } }
            ]
            
            if (price >= '0')
                criteria.price = price
            else
                if (priceMin >= '0' && typeof priceMax === 'undefined')
                    criteria.price = { $gte: priceMin }
                else if (priceMax >= '0' && typeof priceMin === 'undefined')
                    criteria.price = { $lte: priceMax }
                else if (priceMin >= '0' && priceMax >= priceMin)
                    criteria.price = { $gte: priceMin, $lte: priceMax }

            return Product.find(criteria).lean()
        })
        .then(products => {
            products.forEach(product => {
                const { _id } = product

                product.id = _id.toString()

                
            })

            return products
        })
}