module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    createOffer: require('./create-offer.js'),
    retrieveOffer: require('./retrieve-all-offers.js'),
    findOffer: require('./find-offer.js'),
    SaveOfferImage: require('./save-offer-image.js'),
    retrieveOfferImage: require('./retrieve-offer-image'),
    deleteOffer: require('./delete-offer'),
    retrieveUserOffers: require('./retrieve-offer-by-owner')
}