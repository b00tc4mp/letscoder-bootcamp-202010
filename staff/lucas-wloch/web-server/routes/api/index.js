const express = require('express')

const { Router } = express

const router = new Router()

const withErrorHandling = require('./helpers/with-error-handling')

const { cookieParser, cookieSession } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleLikeVehicle
} = require('./handlers')
// api paths

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))


router.post(`/api/likeVehicle/:vehicleId`, cookieParser, cookieSession, withErrorHandling(handleLikeVehicle))

module.exports = router