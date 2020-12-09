const handleRetrieveProductImage = require('./handle-retrieve-product-image');

module.exports = {
    handleRegisterUser: require('./handle-register-user'),
    handleAuthenticateUser: require('./handle-authenticate-user'),
    handleRetrieveUser: require('./handle-retrieve-user'),
    handleSaveProduct: require('./handle-save-product'),
    handleFindProduct: require('./handle-find-products'),
    handleRetrieveProductImage: require('./handle-retrieve-product-image'),
    handleSaveProductImage: require('./handle-save-product-image'),
    handleRetrieveProduct: require('./handle-save-product')
}