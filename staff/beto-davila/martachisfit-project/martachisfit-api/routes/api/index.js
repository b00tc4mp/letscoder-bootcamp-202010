const { Router } = require('express')
const jsonBodyParser = require('../../middlewares/json-body-parser')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleAddFood,
    handleFindFood,
    handleToggleFoodUserDiet,
    handleRetrieveFood
} = require('./handlers/index')

const router = new Router()

// register user
router.post('/api/users', jsonBodyParser, handleRegisterUser)

// retrieve user
router.get('/api/users', handleRetrieveUser)

// authenticate user
router.post('/api/users/auth', jsonBodyParser, handleAuthenticateUser)

// add food to db
router.post('/api/food', jsonBodyParser, handleAddFood)

// retrieve food
router.get('/api/food', handleRetrieveFood)

// find food
router.post('/api/food/search', jsonBodyParser, handleFindFood)

// toggle food
router.post('/api/food/search', handleToggleFoodUserDiet)

module.exports = router