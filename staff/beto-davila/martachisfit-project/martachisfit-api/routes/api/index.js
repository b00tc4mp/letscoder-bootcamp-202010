const { Router } = require('express')
const jsonBodyParser = require('../../middlewares/json-body-parser')

const {
    handleRegisterUser
} = require('./handlers/index')

const router = new Router()

router.post('/api/users', jsonBodyParser, handleRegisterUser)

// router.post('/api/users/auth', jsonBodyParser, handleAuthenticateUser)

module.exports = router