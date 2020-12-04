const createCustomErrors = require('./create-custom-errors')

module.exports = {
    ContentError: createCustomErrors('ContentError'),
    LengthError: createCustomErrors('LengthError'),
    AuthError: createCustomErrors('AuthError'),
    ValueError: createCustomErrors('ValueError'),
    FormatError: createCustomErrors('FormatError'),
    ConflictError: createCustomErrors('ConflictError'),
    NotFoundError: createCustomErrors('NotFoundError')
}