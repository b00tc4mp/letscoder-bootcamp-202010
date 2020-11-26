const { query } = require('express')
const { searchUsers } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { body: { query } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        searchUsers(query)
        .then(users => res.status(200).json(users))
        .catch(error => handleError(204, error))
    } catch (error) {
        handleError(400, error)
    }
}



