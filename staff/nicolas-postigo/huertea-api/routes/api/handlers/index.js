const offer = require('../../../models/schemas/offer');

module.exports = {
    handleAcceptCookies: require('./handle-accept-cookies'),
    handleRegisterUser: require('./handle-register-user'),
    handleAuthenticateUser: require('./handle-authenticate-user'),
    handleRetrieveUser: require('./handle-retrieve-user'),
    handleCreateOffer: require('./handle-create-offer'),
    handleRetrieveOffer: require('./handle-retrieve-offer'),
    handleFindOffer: require('./handle-find-offer'),
    // handleSaveOfferImage: require('./handle-save-image')
}