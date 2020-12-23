const { validateEmail, validateCity, validateDescription, validateTags, validateArtistName, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
const { ConflictError } = require('../errors')
const { User } = require('../models')

module.exports = function (email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description) {
    validateEmail(email)
    validateFullname(fullname)
    validateArtistName(artistName)
    validateCity(city)
    validateDescription(description)

    return semaphore(() => 
        User
            .findOne({ email })
            .then(user => {
                if (!user) throw new ConflictError(`user with email ${email} does not exists`)
                User.updateOne({ email }, {$set: { fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description } })
                .then(result => undefined)
            })
    )
}