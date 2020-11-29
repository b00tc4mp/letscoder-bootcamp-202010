// we need sessionId to accept cookies so we bring sessions object
//const sessions = require('../../sessions') 

module.exports = (req, res) => {
    const { session } = req

    // no stored cookies in the browser --> 406 error!
    if (!session) return res.status(406).json({ error: 'could not accept cookies :( ' })

    session.cookiesAccepted = true

    session.save(error => {
        if (error) return res.status(500).json({ error: 'could not persist cookie :(' })

        return res.status(204).send()
    })

}