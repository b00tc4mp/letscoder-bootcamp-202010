const { Offer } = require('../../huertea-data/models')


module.exports = function (titleoffer, offername, price) {

    const criteria = {}

    if (titleoffer)
    criteria.titleoffer = { $regex: new RegExp(titleoffer, 'i') }

    if (offername)
    criteria.offername = { $regex: new RegExp(offername, 'i') }

    if (price >= 0)
    criteria.price = price

    return Offer.find(criteria).lean()
        
        .then(offers => {
            offers.forEach(offer => {
                const { _id } = offer

                offer.id = _id.toString()

                delete offer._id
            })

            return offers
        })
    }