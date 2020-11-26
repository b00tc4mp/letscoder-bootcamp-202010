module.exports = (req, res, handleError) => {
    const { session } = req

    if (!session) return handleError(406, new Error('could not accept cookies :('))

    session.cookiesAccepted = true

    session.save(error => {
        if (error) return handleError(500, new Error('could not persist cookie :('))

        res.status(204).send()
    })
}