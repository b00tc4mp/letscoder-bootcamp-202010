const { AuthError } = require('../../../errors')

module.exports = (req, res, handleError) => {
    const { session } = req

    if (!session) return handleError(new AuthError('no cookie session'))

    session.cookiesAccepted = true

    session.save(error => {
        if (error) return handleError(new Error('could not persist cookie :('))

        res.status(204).send()
    })
}