const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser } = require('../../middlewares')

const {
    handleAcceptCookies,
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleCreateOffer,
    handleRetrieveOffer,
    handleFindOffer,
    handleSaveOfferImage
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

router.post('/api/offer', jsonBodyParser, withErrorHandling(handleCreateOffer))

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.get('/api/offers', withErrorHandling(handleRetrieveOffer))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/offers/find', jsonBodyParser, withErrorHandling(handleFindOffer))

router.post('/api/notes/:offerId/pics', withErrorHandling(handleSaveOfferImage))



module.exports = router