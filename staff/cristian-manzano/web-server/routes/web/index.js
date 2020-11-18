const { Router } = require('express')
const { urlencodedBodyParser, cookieParser, cookieSession} = require('../../middlewares')

const {
    handleGoToRegister,
    handleRegister,
    handleGoToLogin,
    handleLogin,
    handleGoToHome,
    handleLogout,
    handleGoToSearch,
    handleGoToDetail
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.get('/register', cookieParser, cookieSession, withErrorHandling(handleGoToRegister))

router.post('/register', urlencodedBodyParser, withErrorHandling(handleRegister))

router.get('/login', cookieParser, cookieSession, withErrorHandling(handleGoToLogin))

router.post('/login', cookieParser, cookieSession, urlencodedBodyParser, withErrorHandling(handleLogin))

router.get('/', cookieParser, cookieSession, withErrorHandling(handleGoToHome))

router.post('/logout', cookieParser, cookieSession, withErrorHandling(handleLogout))

router.get('/search', cookieParser, cookieSession, withErrorHandling(handleGoToSearch))

router.get('/vehicles/:vehicleId', cookieParser, cookieSession, withErrorHandling(handleGoToDetail))

module.exports = router