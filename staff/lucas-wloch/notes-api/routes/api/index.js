const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveNote,
    handleRetrieveNotes,
    handleSearchUser,
    handleDeleteNote,
    handleFollowUser,
    handleRetrievePublicNotes,
    handleSaveProducts
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

router.post('/api/users/follow',jsonBodyParser, withErrorHandling(handleFollowUser))

router.post('/api/notes/public',jsonBodyParser, withErrorHandling(handleRetrievePublicNotes))


router.post('/api/products/save',jsonBodyParser, withErrorHandling(handleSaveProducts))

module.exports = router