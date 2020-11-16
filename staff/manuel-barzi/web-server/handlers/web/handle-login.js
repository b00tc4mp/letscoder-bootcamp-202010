const fs = require('fs')
const path = require('path')
const { authenticateUser } = require('../../logic')

module.exports = (req, res, handleError) => {
    const { body: { email, password }, session: { cookiesAccepted } } = req

    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (_error, content) => {
                if (_error) return handleError(_error)

                res.send(content
                    .replace('{cookiesAccepted}', cookiesAccepted)
                    .replace('{feedback}', `<p class="feedback feedback--error">${error.message}</>`))
            })

        const { session } = req

        session.userId = userId

        session.save(error => {
            if (error) return handleError(error)

            res.redirect('/')
        })

    })
}