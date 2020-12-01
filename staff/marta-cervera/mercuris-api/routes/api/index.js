const { Router } = require('express')
const { jsonBodyParser} = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()
//register
router.post('/api/users', jsonBodyParser,(handleRegisterUser))
//authenticate
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
//retrieve
router.get('/api/users', withErrorHandling(handleRetrieveUser))



module.exports = router