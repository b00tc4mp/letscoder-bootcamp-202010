const { saveNotes } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const {body: id, text, tags, owner, visibility} = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        saveNotes(id, text, tags, owner, visibility, error => {
            if (error) return handleError(409, error)

            res.status(201).send()
        })
    } catch (error) {
        handleError(400, error)
    }
}