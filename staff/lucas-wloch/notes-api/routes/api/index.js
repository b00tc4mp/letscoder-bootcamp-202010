const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser, tokenParser } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveNote,
    handleRetrieveNotes,
    handleSearchUser,
    handleDeleteNote
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.post('/api/notes', jsonBodyParser, withErrorHandling(handleSaveNote))

router.get('/api/notes',jsonBodyParser, withErrorHandling(handleRetrieveNotes))

router.post('/api/users/search',jsonBodyParser, withErrorHandling(handleSearchUser))

router.post('/api/notes/delete',jsonBodyParser, withErrorHandling(handleDeleteNote))


module.exports = router