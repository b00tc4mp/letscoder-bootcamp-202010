const path = require('path')
const fs = require('fs')
const authenticateUser = require('../../logic/authenticate-user')



module.exports = (req, res) => {

    const { body: { email, password }, session } = req

    authenticateUser(email, password, (error, userId) => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (_error, content) => {
                if (_error) return handleError(error)
                res.send(content
                    .replace('{feedback}', error.message)
                    .replace('{cookiesAccepted}', session.cookiesAccepted))
            })



        session.userId = userId

        session.save(error => {
            if (error) return handleError(error)

            res.redirect('/')
        })


    })
}