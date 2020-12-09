const { Router } = require('express')
const { jsonBodyParser} = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveProduct,
    handleFindProduct,
    handleSaveProductImage,
    handleRetrieveProduct
    

} = require('./handlers')


const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()
//registerUser
router.post('/api/users', jsonBodyParser,(handleRegisterUser))
//authenticateUser
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
//retrieveUser
router.get('/api/users', withErrorHandling(handleRetrieveUser))
//saveProduct
router.post('/api/products',jsonBodyParser, withErrorHandling(handleSaveProduct))
//findProduct
// /api/products?queryCompany=<queryCompany>&queryProduct=<queryProduct>&price=<price>&priceMin=<priceMin&priceMax=<priceMax>
// Example API call: https://localhost:4000/api/products?queryCompany='1423423'&queryProduct='sdjkfsd'&price='sdfgsfgdf'
// you access this (only in express) in the req object, req.query ==> for example const { queryCompany } = req.query 
router.get('/api/products', withErrorHandling(handleFindProduct))
//retrieveProduct
router.get('/api/products', withErrorHandling,(handleRetrieveProduct))
//saveProductImage
router.post('/api/products/:productId/images', withErrorHandling(handleSaveProductImage))

module.exports = router