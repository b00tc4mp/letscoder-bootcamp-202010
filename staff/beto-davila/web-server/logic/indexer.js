const authenticateUser = require('./authenticate-user');
const registerUser = require('./register-user');
const retrieveUser = require('./retrieve-user');

module.exports = {
    searchVehicles: require('./search-vehicles'),
    retrieveVehicles: require('./retrieve-vehicles'),
    retrieveUser: require('./retrieve-user'),
    authenticateUser: require('./authenticate-user'),
    registerUser: require('./register-user')
}