const { modifyLive } = require('../../../logic')
const jwt = require("jsonwebtoken");

const {
    env: { JWT_SECRET },
} = process;
module.exports = (req, res, handleError) => {


    const { headers: { authorization }, body: { liveId, title, liveDate, duration, status, payment, description } } = req

    try {
        const token = authorization.replace("Bearer ", "");
        const { sub: userId } = jwt.verify(token, JWT_SECRET);
        
        if (userId)
        modifyLive(liveId, title, liveDate, duration, status, payment, description)
            .then(() => {
                return res.status(204).send()
            })
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}