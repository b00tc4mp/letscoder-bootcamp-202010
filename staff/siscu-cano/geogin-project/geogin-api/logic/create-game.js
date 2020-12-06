const { validateEmail, validatePassword, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('geogin-errors')
const { Game } = require('../models')

module.exports = function (qrCode, id_game, teams, players, quest, progress, organizer) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    return semaphore(() =>
        User
            .findOne({ email })
            .then(user => {
                if (user) throw new ConflictError(`user with e-mail ${email} already registered`)

                return bcrypt.hash(password, 10)
            })
            .then(hash => User.create({ fullname, email, password: hash }))
            .then(() => { })
    )
}