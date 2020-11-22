const { query } = require('express')
const { searchUsers } = require('../../../logic')

module.exports = (req, res, handleError) => {

    const { body: { query } } = req

    res.setHeader('Access-Control-Allow-Origin', '*')

    try {
        searchUsers(query, (error, users) => {
            if (error) return handleError(204, error)

            res.status(200).json(users)
        })
    } catch (error) {
        handleError(400, error)
    }
}



