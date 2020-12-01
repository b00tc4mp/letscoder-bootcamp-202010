const user = require('../models/schemas/user');
const retrieveUser = require('./retrieve-user');

module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user')

}