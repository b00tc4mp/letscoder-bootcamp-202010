const { Router } = require('express')
const { cookieParser, cookieSession, jsonBodyParser } = require('notes-middlewares')

const {
    handleAcceptCookies,
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

router.post('/api/accept-cookies', cookieParser, cookieSession, withErrorHandling(handleAcceptCookies))

router.post('/api/users', jsonBodyParser, withErrorHandling(handleRegisterUser))

router.post('/api/users/auth', jsonBodyParser, withErrorHandling(handleAuthenticateUser))

router.get('/api/users', withErrorHandling(handleRetrieveUser))

router.post('/api/notes', jsonBodyParser, withErrorHandling(handleSaveNote))

router.get('/api/notes', withErrorHandling(handleRetrieveNotes))

router.post('/api/notes/:noteId/images', withErrorHandling(handleSaveNoteImage))

// const fs = require('fs')
// const path = require('path')

// router.get('/api/notes/:noteId/images', (req, res) => {
//     const { params: { noteId } } = req

//     const file = fs.createReadStream(path.join(__dirname, `../../data/notes/${noteId}.jpg`))

//     res.setHeader('Content-type', 'image/jpeg')

//     file.pipe(res)
// })

router.get('/api/notes/:noteId/images', withErrorHandling(handleRetrieveNoteImage))

module.exports = router