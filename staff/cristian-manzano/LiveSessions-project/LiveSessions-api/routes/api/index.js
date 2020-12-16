const { Router } = require('express')
const { jsonBodyParser } = require('../../middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleEditUser,
    handleSearchArtists,
    handleSaveImage,
    handleRetrieveUserImage,
    handleSaveLive,
    handleRetrieveLives,
    handleModifyLive
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

// router.use(jsonBodyParser)

//API USERS POST
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/edit', jsonBodyParser, withErrorHandling(handleEditUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.post(
    "/api/users/:userId/images",
    withErrorHandling(handleSaveImage)
  ); 

//API USER GET

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.get("/api/users/:userId/images", withErrorHandling(handleRetrieveUserImage))

router.get(`/api/artists`, withErrorHandling(handleSearchArtists))

// API LIVES POST

router.post(`/api/lives`, jsonBodyParser, withErrorHandling(handleSaveLive))

router.post(`/api/lives/edit`, jsonBodyParser, withErrorHandling(handleModifyLive))

// API LIVES GET

router.get(`/api/lives`, withErrorHandling(handleRetrieveLives))



module.exports = router