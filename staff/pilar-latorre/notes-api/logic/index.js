const searchUsersFullname = require('./search-users-email');

module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUser: require('./retrieve-user'),
    saveNote: require('./save-note'),
    retrieveNotes: require('./retrieve-notes'),
    context: require('./context'),
    searchUsersFullname: require('./search-users-fullname'),
    searchUsersEmail: require('./search-users-email'),
    findUsers: require('./find-users')

}