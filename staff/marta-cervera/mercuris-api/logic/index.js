const user = require('../models/schemas/user');
const retrieveUser = require('./retrieve-user');
const saveProduct = require('./save-product');

module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    saveProduct:require('./save-product')

}