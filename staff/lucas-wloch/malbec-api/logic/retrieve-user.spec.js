require('dotenv').config()
require('../utils/array-polyfills')

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const { FormatError, NotFoundError } = require('../errors')
const retrieveUser = require('./retrieve-user')
const { models: { User }, mongoose } = require('malbec-data')
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL } } = process

describe('retrieveUser() SPEC', () => {
    before(() => mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }))

    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            return bcrypt.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash }
                    debugger
                    return User.create(user)
                        .then(user => User.findOne({ email: user.email }).lean())
                        .then(user => userId = user._id.toString())
                })
        })

        it('should succed correct credentials', () =>
            retrieveUser(userId)
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    expect(user.email).to.equal(email)

                    return User.findOne({ email: user.email })
                })
                .then(user => bcrypt.compare(password, user.password))
                .then(match => expect(match).to.be.true)
        )

        afterEach(() =>
            User.deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user does not exist', () => {
        let userId

        beforeEach(() => {
            userId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()
            //valid ids but from products not users
        })

        it('should fail on valid id', () =>
            retrieveUser(userId)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)

                    expect(error.message).to.equal(`user with id ${userId} is not found`)
                })
        )

    })
    describe('when any parameter is wrong', () => {
        describe('when userId is wrong', () => {
            describe('when userId is not a string', () => {
                let userId

                beforeEach(() => {
                    userId = randomNonString()
                })

                it('should fail on non string userId', () => {
                    expect(() => retrieveUser(userId)).to.throw(TypeError, `${userId} is not an id`)
                })
            })

            describe('when userId is empty or blank', () => {
                let userId

                beforeEach(() => {
                    userId = randomEmptyOrBlankString()
                })

                it('should fail on empty or blank userId', () => {
                    expect(() => retrieveUser(userId)).to.throw(Error, 'id is empty or blank')
                })
            })

        })
    })

    after(mongoose.disconnect)
})