const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleEditUser,
    handleSearchArtists
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

// router.use(jsonBodyParser)


router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/edit', jsonBodyParser, withErrorHandling(handleEditUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.get(`/api/users/?${queryString}`, withErrorHandling(handleSearchArtists))



module.exports = router