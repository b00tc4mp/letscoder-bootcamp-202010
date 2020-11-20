const { logger } = require('../../../utils')

module.exports = handler =>
    (req, res) =>
        handler(req, res, (status, error) => {
            logger.log(error, 'error')

            res.status(status).json({ error: error.message })
        })
