const logger = require("../../../utils/logger")

module.exports = handler =>
    (req, res) =>
        handler(req,res, (status, error) => {
            logger.log(error, 'error')

            res.status(status).json({error})
        })