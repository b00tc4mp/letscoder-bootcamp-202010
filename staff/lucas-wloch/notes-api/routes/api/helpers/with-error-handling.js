const { logger } = require('../../../utils')

const {ContentError, LengthError, ValueError, FormatError, NotFoundError, AuthError, ConflictError, AlreadyExistsError} = require('../../../errors')

module.exports = handler =>
    (req, res) =>
        handler(req, res, (error) => {
            logger.log(error, 'error')

            let status = 500

            switch(true){
                case error instanceof TypeError:
                case error instanceof ContentError:
                case error instanceof LengthError:
                case error instanceof ValueError:
                case error instanceof FormatError:
                    status = 400
                    break
                case error instanceof NotFoundError:
                    status = 404
                    break
                case error instanceof AuthError:
                    status = 401
                    break
                case error instanceof ConflictError:
                    case error instanceof AlreadyExistsError:
                    status = 409
                    break
                
                    
            }

            res.status(status).json({ error: error.message })
        })
