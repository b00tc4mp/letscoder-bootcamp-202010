const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
handleRegisterUser,
handleRetrieveUser,
handleAuthenticateUser,
handleSaveProducts,
handleRetrieveProductCategory,
handleRetrieveProductById,
handleSaveProductImage,
handleRetrieveProductImage,
handleSaveMenu,
handleFindMenu
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

//routes
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/users/auth',jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.post('/api/products',jsonBodyParser, withErrorHandling(handleSaveProducts))

router.post('/api/products/:productId/images', withErrorHandling(handleSaveProductImage))

router.get('/api/products/:productId/images', withErrorHandling(handleRetrieveProductImage))

router.get('/api/products/category/:category', withErrorHandling(handleRetrieveProductCategory))

router.get('/api/products/:productId', withErrorHandling(handleRetrieveProductById))

router.post('/api/menu',jsonBodyParser, withErrorHandling(handleSaveMenu))

router.get('/api/menu', withErrorHandling(handleFindMenu))

// router.get('/api/products', withErrorHandling(handleRetrieveProducts))

module.exports = router