require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const editUser = require('./edit-user')
const mongoose = require('mongoose')
const { User } = require('../models')

const { env: { MONGODB_URL } } = process

describe('editUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description

        beforeEach(() => {
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })

        it('should succeed on correct user id', () => {

            let artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description

            artistName = randomStringWithPrefix('artistName')
            city = randomStringWithPrefix('city')
            tags = randomStringWithPrefix('tags')
            youtubeLink = randomStringWithPrefix('youtubeLink')
            bandcampLink = randomStringWithPrefix('bandcampLink')
            spotifyLink = randomStringWithPrefix('spotifyLink')
            description = randomStringWithPrefix('description')

            return editUser(email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description)
                .then(() => {
                    return User.findOne({ email })
                        .then(user => {
                            User.updateOne({ email }, { $set: { fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description } })
                                .then(result => undefined)
                            expect(user).to.exist
                            expect(user.fullname).to.equal(fullname)
                            expect(user.artistName).to.equal(artistName)
                            expect(user.city).to.equal(city)
                            expect(user.tags).to.equal(tags)
                            expect(user.youtubeLink).to.equal(youtubeLink)
                            expect(user.bandcampLink).to.equal(bandcampLink)
                            expect(user.spotifyLink).to.equal(spotifyLink)
                            expect(user.description).to.equal(description)
                            expect(user.email).to.equal(email)
                            expect(user.password).to.be.equal(password)
                        })
                })
        })
    
    describe('when user email is wrong', () => {
        let email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description

        beforeEach(() => {

            email = randomWithPrefixAndSuffix('email', '@mail.com')
            fullname = randomStringWithPrefix('fullname')
            artistName = randomStringWithPrefix('artistName')
            city = randomStringWithPrefix('city')
            tags = randomStringWithPrefix('tags')
            youtubeLink = randomStringWithPrefix('youtubeLink')
            bandcampLink = randomStringWithPrefix('bandcampLink')
            spotifyLink = randomStringWithPrefix('spotifyLink')
            description = randomStringWithPrefix('description')

        })

        it('should fail on wrong user email', () =>
            User.findOne({ email })
                .then(user => {
                    User.updateOne({ email }, { $set: { fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description } })
                        .then(result => undefined)
                        .catch(error => {
                            expect(error).to.be.instanceOf(Error)

                            expect(error.message).to.equal(`user with email ${email} does not exists`)
                        })
                })
        )
    })

    afterEach(() =>
        User
            .deleteMany()
            .then(result => expect(result.deletedCount).to.equal(1))
    )
})

after(mongoose.disconnect)
})