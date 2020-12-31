const { logger } = require('../../../utils')
const { ContentError, LengthError, ValueError, FormatError, NotFoundError, AuthError, ConflictError } = require('martachisfit-errors')

module.exports = handler =>
    (req, res) =>
        handler(req, res, error => {
            logger.log(error, 'error')

            let status = 500

            switch(true) {
                case error instanceof TypeError || 
                    error instanceof ContentError || 
                    error instanceof LengthError || 
                    error instanceof ValueError || 
                    error instanceof FormatError:
                    status = 400
                    break
                case error instanceof NotFoundError:
                    status = 404
                    break
                case error instanceof AuthError:
                    status = 401
                    break
                case error instanceof ConflictError:
                    status = 409
                    break
            }

            res.status(status).json({ error: error.message })
        })