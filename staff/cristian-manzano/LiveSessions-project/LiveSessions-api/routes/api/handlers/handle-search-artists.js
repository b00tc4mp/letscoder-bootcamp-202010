const { searchArtists } = require('../../../logic')
const jwt = require("jsonwebtoken")

const { env: { JWT_SECRET }
} = process

module.exports = (req, res, handleError) => {
    debugger

    const { headers: { authorization }, query: { tags } } = req;

    const token = authorization.replace('Bearer ', '')

    try {

        const { sub: userId } = jwt.verify(token, JWT_SECRET)
        debugger
        searchArtists(userId, tags)
            .then(users => res.status(200).json(users))
            .catch(handleError)

    } catch (error) {
        handleError(error)
    }
}