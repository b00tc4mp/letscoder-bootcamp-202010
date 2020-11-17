module.exports = (req, res) => {

    const{ session } = req

    if (!session) return res.status(406).json({ error: 'could not accept cookies :(' })

    session.cookiesAccepted = true

    session.save(error => {
        if (error) return res.status(500).json({error: 'could not persist cookie :(' })
    })

    res.status(204).send()
} 