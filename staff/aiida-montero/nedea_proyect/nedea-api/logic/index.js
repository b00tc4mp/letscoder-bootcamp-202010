const { default: authenticateUser } = require('./authenticate-user');
const retrieveUser = require('./retrieve-user');
const savePictogram = require('./save-pictogram');

module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    savePictogram : require('./save-pictogram'),
    findPictogram : require('./find-pictogram')
}