const { editUser } = require('../../../logic')

const jwt = require("jsonwebtoken");

const {
    env: { JWT_SECRET },
} = process;


module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description } } = req

    try {
        const token = authorization.replace("Bearer ", "");
        const { sub: userId } = jwt.verify(token, JWT_SECRET);
        if(userId)
        editUser(email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description)
            .then(() => {
                return res.status(204).send()})
            .catch(handleError)
            } catch (error) {
                handleError(error)
            }
    }
