const { Router } = require('express')
const jsonBodyParser = require('../../middlewares/json-body-parser')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleAddFood
} = require('./handlers/index')

const router = new Router()

router.post('/api/users', jsonBodyParser, handleRegisterUser)

router.get('/api/users', handleRetrieveUser)

router.post('/api/users/auth', jsonBodyParser, handleAuthenticateUser)

router.post('/api/food', jsonBodyParser, handleAddFood)

module.exports = router