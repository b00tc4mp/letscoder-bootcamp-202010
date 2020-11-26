const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveNote,
    handleRetrieveNotes,
    handleSearchUsers
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

// register
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

// authentication
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

// retrieve user
router.get('/api/users', withErrorHandling(handleRetrieveUser))

// retrieve notes
router.get('/api/notes', withErrorHandling(handleRetrieveNotes))

// save note
router.post('/api/notes', jsonBodyParser, withErrorHandling(handleSaveNote))

// search users
router.post('/api/users/search', jsonBodyParser, withErrorHandling(handleSearchUsers))

module.exports = router