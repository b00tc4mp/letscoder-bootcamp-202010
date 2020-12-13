const { Router } = require('express')
const { jsonBodyParser } = require('geogin-middlewares')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleUpdateUser,
    handleImageUpload,
    handleSaveQuest,
    handleSaveGame
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const pdfController = require('../../controllers/pdf')

const router = new Router()

// Users
router.get('/api/users', withErrorHandling(handleRetrieveUser))
router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))
router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))
router.patch('/api/users', jsonBodyParser, withErrorHandling(handleUpdateUser))

// Game
router.post('/api/quest', jsonBodyParser, withErrorHandling(handleSaveQuest))
router.post('/api/game', jsonBodyParser, withErrorHandling(handleSaveGame))

// Image upload
router.post("/api/image-upload", jsonBodyParser, withErrorHandling(handleImageUpload))
   
// Pdf create
router.post('/api/pdf-upload', jsonBodyParser, pdfController.pdf)

module.exports = router