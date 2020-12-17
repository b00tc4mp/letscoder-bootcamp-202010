const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSavePet,
    handleFindPets,
    handleRetrievePet,
    handleDeletePet,
    handleSavePetImage,
    handleRetrievePetImage
  
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

//user
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))
//pet
router.post('/api/pets', jsonBodyParser, withErrorHandling(handleSavePet))

router.get('/api/pets', withErrorHandling(handleFindPets))

router.get('/api/pets/:petId', withErrorHandling(handleRetrievePet))

router.delete('/api/pets/:petId', withErrorHandling(handleDeletePet))

router.post('/api/pets/:petId/images', withErrorHandling(handleSavePetImage))

router.get('/api/pets/:petId/images', withErrorHandling(handleRetrievePetImage))





module.exports = router