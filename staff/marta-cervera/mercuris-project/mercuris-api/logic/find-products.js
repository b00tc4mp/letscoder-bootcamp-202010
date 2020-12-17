const { models: { User, Product }, mongoose: { Types: { ObjectId } } } = require('mercuris-data')

const { validateQuery, validatePrice} = require('./helpers/validations')

module.exports = function (userId, queryCompany, queryProduct, price, priceMin, priceMax) {
    if (typeof queryCompany !== 'undefined') validateQuery(queryCompany)
    if (typeof queryProduct !== 'undefined') validateQuery(queryProduct)
     /* if (typeof price !== 'undefined') validatePrice(price)
    if (typeof priceMax !== 'undefined') validatePrice(price)
    if (typeof priceMin !== 'undefined') validatePrice(price)   */ 
     
    
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



            const criteria = {
                owner: { $in: ids }
            }
            if (queryProduct)
                criteria.$or = [
                    { name: { $regex: new RegExp(queryProduct, 'i') } },
                    { description: { $regex: new RegExp(queryProduct, 'i') } }
                ]

            if (price >= 0)
                criteria.price = price
            else
                if (priceMin >= 0 && typeof priceMax === 'undefined')
                    criteria.price = { $gte: priceMin }
                else if (priceMax >= 0 && typeof priceMin === 'undefined')
                    criteria.price = { $lte: priceMax }
                else if (priceMin >= 0 && priceMax >= priceMin)
                    criteria.price = { $gte: priceMin, $lte: priceMax }

            return Product.find(criteria).lean()
        })
        .then(products => {
            products.forEach(product => {
                const { _id } = product

                product.id = _id.toString()

                delete product._id
                delete product.__v


            })

            return products
        })
}