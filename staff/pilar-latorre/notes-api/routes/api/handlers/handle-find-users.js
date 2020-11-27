const { findUsers } = require('../../../logic')
const jwt = require('jsonwebtoken')

const { env: {JWT_SECRET, JWT_EXP}} = process


module.exports = (req, res, handleError) => {
    const { body: { query } } = req

    try {
        findUsers(query) 

            .then((results) => {
                
                res.status(200).json( results )

            })
            .catch(handleError)
           
        
    } catch (error) {
        handleError(error)
    }
}