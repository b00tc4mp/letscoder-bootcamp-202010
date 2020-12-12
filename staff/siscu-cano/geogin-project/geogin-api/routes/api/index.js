const { Router } = require('express')
const { jsonBodyParser } = require('geogin-middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleImageUpload,
    handleSaveQuest
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

// Users
router.get('/api/users', withErrorHandling(handleRetrieveUser))
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
router.patch('/api/users', jsonBodyParser, withErrorHandling(handleUpdateUser))

// Quest
router.post('/api/quest', jsonBodyParser, withErrorHandling(handleSaveQuest))

// image upload API
router.post("/api/image-upload", jsonBodyParser, withErrorHandling(handleImageUpload))
   

module.exports = router