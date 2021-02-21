const { Router } = require('express')
const { jsonBodyParser} = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveProduct,
    handleFindProduct,
    handleSaveProductImage,
    handleRetrieveProductImage,
    handleRetrieveProductDetail,
    handleModifyUser,
    handleDeleteProduct   
    

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
router.get('/api/products', withErrorHandling(handleFindProduct))
//saveProductImage
router.post('/api/products/:productId/images', withErrorHandling(handleSaveProductImage))
//retrieveProductImage
router.get('/api/products/:productId/images', withErrorHandling(handleRetrieveProductImage))
//retrieveProductDetail
router.get('/api/products/:productId', withErrorHandling(handleRetrieveProductDetail))
//modifyUser
router.post('/api/users/edit', jsonBodyParser, withErrorHandling(handleModifyUser))
//deleteProduct
router.delete('/api/products/:productId', withErrorHandling(handleDeleteProduct))

module.exports = router

