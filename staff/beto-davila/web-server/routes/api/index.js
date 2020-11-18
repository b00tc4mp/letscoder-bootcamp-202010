const express = require('express')

const { Router } = express

const router = new Router()

// error handling logic
const withErrorHandling = require('./helpers/with-error-handling')

// middlewares
const { cookieParser, cookieSession } = require('../../middlewares/indexer')

const {
    handleAcceptCookies
    //handleLikeVehicle
} = require('./handlers')

/* route API paths */
router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))
//router.post(`/api/likeVehicle/:vehicleId`, cookieParser, cookieSession, withErrorHandling(handleLikeVehicle))

module.exports = router