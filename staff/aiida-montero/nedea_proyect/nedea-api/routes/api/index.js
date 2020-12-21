const {Router } =  require('express')
const {jsonBodyParser} = require('../../middlewares')

const{
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSavePictogram,
    handleFindPictogram,
    handleFindPictogramByUser,
    handleSavePictogramImage,
    handleRetrievePictogramImage,
    handleToggleLikePictogram,
    handleRetrieveFavouritePictogram,
    handleDeletePictogram,
} =require('./handlers')



const withErrorHandling = require('./helpers/with-error-handling')
const router = new Router()
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
router.get('/api/users', withErrorHandling(handleRetrieveUser))
router.post('/api/pictograms', jsonBodyParser, withErrorHandling(handleSavePictogram))
router.get('/api/pictograms', withErrorHandling(handleFindPictogram))
router.get('/api/my-pictograms', withErrorHandling(handleFindPictogramByUser))
router.post('/api/pictograms/:pictogramId/images', withErrorHandling(handleSavePictogramImage))
router.get('/api/pictograms/:pictogramId/images', withErrorHandling(handleRetrievePictogramImage))
router.patch('/api/users', jsonBodyParser, withErrorHandling(handleToggleLikePictogram))
router.get('/api/users/favourites', withErrorHandling(handleRetrieveFavouritePictogram))
router.delete('/api/pictograms', jsonBodyParser, withErrorHandling(handleDeletePictogram))
module.exports = router