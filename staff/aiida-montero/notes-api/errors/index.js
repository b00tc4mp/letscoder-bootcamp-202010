const createCustomsError = require('./create-custom-error')

module.exports = {
    ContentError: createCustomsError('ContentError'),
    LengthError: createCustomsError('LengthError'),
    AuthError: createCustomsError('AuthError'),
    ValueError: createCustomsError('ValueError'),
    FormatError: createCustomsError('FormatError'),
    ConflictError: createCustomsError('ConflictError'),
    NotFoundError: createCustomsError('NotFoundError'),

}