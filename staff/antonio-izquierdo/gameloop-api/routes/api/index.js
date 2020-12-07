const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveGame,
    handleFindGames,
    handleDetailGame
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/games', jsonBodyParser, withErrorHandling(handleSaveGame))

router.post('/api/games/find', jsonBodyParser, withErrorHandling(handleFindGames))

router.get('/api/games/:gameId', withErrorHandling(handleDetailGame))

module.exports = router