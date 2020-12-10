const express = require('express')

const { Router } = express

const router = new Router()

const withErrorHandling = require('./helpers/with-error-handling')

const { urlencodedBodyParser, cookieParser, cookieSession} = require('../../middlewares')

const {
    handleGoToRegister,
    handleRegister,
    handleGoToLogin,
    handleLogin,
    handleGoToHome,
    handleLogout,
    handleGoToSearch,
    handleGoToDetail,
    handleGoToFavourites
} = require('./handlers')

router.get('/register',cookieParser, cookieSession, withErrorHandling(handleGoToRegister))

router.post('/register', urlencodedBodyParser,cookieParser, cookieSession, withErrorHandling(handleRegister))

router.get('/login',cookieParser, cookieSession, withErrorHandling(handleGoToLogin))

router.post('/login',cookieParser, cookieSession, urlencodedBodyParser, withErrorHandling(handleLogin))

router.get('/',cookieParser, cookieSession, withErrorHandling(handleGoToHome))

router.post('/logout', cookieParser, cookieSession, withErrorHandling(handleLogout))

// search paths

router.get('/search', cookieParser, cookieSession, withErrorHandling(handleGoToSearch))

router.get(`/vehicles/favourites`, cookieParser, cookieSession, withErrorHandling(handleGoToFavourites))

router.get(`/vehicles/:vehicleId`, cookieParser, cookieSession, withErrorHandling(handleGoToDetail))

module.exports = router