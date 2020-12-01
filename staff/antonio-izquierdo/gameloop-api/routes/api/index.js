const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    handleRegisterUser
} = require('./handlers')

const router = new Router()

router.post('/api/users', jsonBodyParser, (handleRegisterUser))

module.exports = router