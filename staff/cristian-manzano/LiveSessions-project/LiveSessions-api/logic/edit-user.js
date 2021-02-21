const { validateEmail, validateCity, validateDescription, validateTags, validateArtistName, validateFullname } = require('./helpers/validations')
const semaphore = require('./helpers/semaphore')
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
                User.updateOne({ email }, {$set: { fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description } })
                .then(result => undefined)
            })
    )
}