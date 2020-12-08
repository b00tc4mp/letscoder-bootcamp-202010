const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
handleRegisterUser,
handleRetrieveUser,
handleAuthenticateUser,
handleSaveProducts,
handleRetrieveProducts
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

//routes
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/users/auth',jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.post('/api/products',jsonBodyParser, withErrorHandling(handleSaveProducts))

router.get('/api/products/:category', withErrorHandling(handleRetrieveProducts))

// router.get('/api/products', withErrorHandling(handleRetrieveProducts))

module.exports = router