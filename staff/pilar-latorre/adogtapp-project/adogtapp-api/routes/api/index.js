const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser
  /*  handleRetrievePet,
    handleSavePet,
   */
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()


router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

/*router.post('/api/pets', jsonBodyParser, withErrorHandling(handleSavePet))

router.get('/api/pets', withErrorHandling(handleRetrievePets)) */

module.exports = router