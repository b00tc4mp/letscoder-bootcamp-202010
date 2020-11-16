const path = require('path')
const fs = require('fs')

module.exports = (req, res, handleError) => {

    const { session: {userId, cookiesAccepted} } = req

    if (!userId)
        fs.readFile(path.join(__dirname, '../../views/login.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            content = content.replace('{cookiesAccepted}', cookiesAccepted)

            res.send(content.replace('{feedback}', ''))
        })

    else res.redirect('/')


}