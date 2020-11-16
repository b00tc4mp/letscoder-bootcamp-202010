const fs = require('fs')
const path = require('path')

module.exports = (req, res, handleError) => {
    const { session: { userId, cookiesAccepted } } = req

    if (!userId)
        fs.readFile(path.join(__dirname,'../../views/register.html'), 'utf8', (error, content) => {
            if (error) return handleError(error)

            res.send(content
                .replace('{cookiesAccepted}', cookiesAccepted)
                .replace('{feedback}', ''))
        })

    else res.redirect('/')


}

