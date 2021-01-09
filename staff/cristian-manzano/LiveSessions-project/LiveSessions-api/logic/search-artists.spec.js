require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const searchArtists = require('./search-artists')
const mongoose = require('mongoose')
const { User } = require('../models')

const { env: { MONGODB_URL } } = process

describe('searchArtists()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, role, userId, tags
        beforeEach(() => {
            console.log(tags)
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            role = 'ARTIST'
            tags = ['rock', 'soul', 'funk', 'pop', 'jazz'].random()

            const user = { fullname, email, password, role, tags }

            return User.create(user)
                .then(user => userId = user.id)
        })
        it('should succeed on search existing user with this tag', () =>
            searchArtists(tags)
                .then(user => {
                    expect(user).to.exist
                })
        )

        describe('should fail when does not exist a user with this tag', () => {
            let tags

            beforeEach(() => tags = randomStringWithPrefix('wrongTag'))

            it('should fail on wrong tag', () =>
                searchArtists(tags)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`user with id ${tags} not found`)
                    })
            )
        })

        afterEach(() =>
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when tags is wrong', () => {
        describe('when tags is not a string', () => {
            let tags

            beforeEach(() => tags = randomNonString())

            it('should fail on non-string tag', () => {
                expect(() => searchArtists(tags, () => { })).to.throw(TypeError, `${tags} is not a tag`)
            })
        })
    })

    after(mongoose.disconnect)
})  