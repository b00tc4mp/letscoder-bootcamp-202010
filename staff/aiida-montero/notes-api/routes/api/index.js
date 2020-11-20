const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleRetrieveNotes,
    handleSaveNotes
} = require('./handlers')


const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()


router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth',jsonBodyParser,withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

/* router.get('/api/notes',withErrorHandling,(handleRetrieveNotes) ) */

router.post('/api/notes',jsonBodyParser,withErrorHandling,(handleSaveNotes) )
module.exports = router