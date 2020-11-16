const fs = require('fs')
const path = require('path') // solve path problems when executing the scripts from different locations
const { registerUser } = require('../../logic/indexer')

module.exports = (req, res, handleError) => {
    // body passed by middleware urlencoded previously
    const { body: { fullname, email, password } } = req

    registerUser(fullname, email, password, error => {
        if (error)
            return fs.readFile(path.join(__dirname, '../../views/register.html'), 'utf8', (_error, content) => {
                if (_error) return handleError(_error)

                res.send(content.replace('{feedback}', '<p class="feedback feedback--error">The user was registered already</p>'))
            })

        fs.readFile(path.join(__dirname, '../../views/register-confirm.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            res.send(content)
        })
    })

}