const {Router } =  require('express')
const {jsonBodyParser} = require('../../middlewares')

const{
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSavePictogram,
    handleFindPictogram
} =require('./handlers')


const withErrorHandling = require('./helpers/with-error-handling')
const router = new Router()

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
router.get('/api/users', withErrorHandling(handleRetrieveUser))
router.post('/api/pictograms', jsonBodyParser, withErrorHandling(handleSavePictogram))
router.get('/api/pictograms', withErrorHandling(handleFindPictogram))

module.exports = router