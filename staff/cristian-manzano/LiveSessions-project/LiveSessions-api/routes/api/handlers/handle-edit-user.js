const { editUser } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { body: { email, fullname, artistName, city, tags, description } } = req

    try {
        editUser(email, fullname, artistName, city, tags, description)
            .then(() => {
                return res.status(204).send()})
            .catch(handleError)
            } catch (error) {
                handleError(error)
            }
    }
