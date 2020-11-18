const { Router } = require('express')
const { cookieParser, cookieSession } = require('../../middlewares')

const {
    handleAcceptCookies
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

module.exports = router
