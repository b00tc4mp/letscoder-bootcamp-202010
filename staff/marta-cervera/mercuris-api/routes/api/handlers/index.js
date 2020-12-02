const { mainModule } = require("process");

module.exports = {
    handleRegisterUser: require('./handle-register-user'),
    handleAuthenticateUser: require('./handle-authenticate-user'),
    handleRetrieveUser: require('./handle-retrieve-user'),
    handleSaveProduct: require('./handle-save-product')
}