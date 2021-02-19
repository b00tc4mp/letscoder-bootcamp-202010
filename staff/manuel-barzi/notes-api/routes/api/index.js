const { Router } = require('express')
const { jsonBodyParser } = require('notes-middlewares')
const jwtParser = require('./middlewares/jwt-parser')

const {
    handleRegisterUser,
    handleAuthenticateUser,
    handleRetrieveUser,
    handleSaveNote,
    handleRetrieveNotes,
    handleSaveNoteImage,
    handleRetrieveNoteImage
} = require('./handlers')

const withErrorHandling = require('./helpers/with-error-handling')

const router = new Router()

// router.use(jsonBodyParser)

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(jwtParser), withErrorHandling(handleRetrieveUser))

router.post('/api/notes', withErrorHandling(jwtParser), jsonBodyParser, withErrorHandling(handleSaveNote))

router.get('/api/notes', withErrorHandling(jwtParser), withErrorHandling(handleRetrieveNotes))

router.post('/api/notes/:noteId/images', withErrorHandling(jwtParser), withErrorHandling(handleSaveNoteImage))

router.get('/api/notes/:noteId/images', withErrorHandling(handleRetrieveNoteImage))

module.exports = router