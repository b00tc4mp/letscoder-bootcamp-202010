module.exports = (req, res) => {
    const { session } = req

    if (!session) return res.status(406).json({ error: 'could not accept cookies :(' })

    session.cookiesAccepted = true

    return res.status(204).send()
}