const { validateEmail, validatePassword } = require('./helpers/validations')
const { AuthError } = require('notes-errors')
const { models: { User } } = require('notes-data')
const bcrypt = require('bcryptjs')

module.exports = (email, password) => {
    validateEmail(email)
    validatePassword(password)

    return (async () => {
        const user = await User.findOne({ email }).lean()

        if (!user) throw new AuthError('wrong credentials')

        const { password: hash } = user

        const match = await bcrypt.compare(password, hash)

        if (!match) throw new AuthError('wrong credentials')

        const { _id } = user

        return _id.toString()
    })()
}