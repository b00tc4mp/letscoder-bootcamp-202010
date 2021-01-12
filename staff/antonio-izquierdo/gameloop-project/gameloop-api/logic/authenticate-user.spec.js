require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const authenticateUser = require('./authenticate-user')
//TODO CHANGE THIS BELLOW
const { models: { User }, mongoose }  = require('gameloop-data')
const bcrypt = require('bcryptjs')
const { ContentError } = require('gameloop-errors')

const { env: { MONGODB_URL } } = process

describe('authenticateUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let userId, fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            return bcrypt.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash }

                    return User.create(user)
                        .then(user => userId = user.id)
                })
        })

        it('should succeed on correct credentials', () =>
            authenticateUser(email, password)
                .then(_userId => expect(_userId).to.equal(userId))
        )

        describe('when wrong credentials', () => {
            it('should fail on wrong e-mail', () =>
                authenticateUser(`wrong${email}`, password)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal('wrong credentials')
                    })
            )

            it('should fail on wrong password', () =>
                authenticateUser(email, `wrong${password}`)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal('wrong credentials')
                    })
            )
        })

        afterEach(() =>
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user does not exist', () => {
        let email, password

        beforeEach(() => {
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should fail on valid credentials', () =>
            authenticateUser(email, password)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal('wrong credentials')
                })
        )
    })

    describe('when any parameter is wrong', () => {
        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on a non string e-mail', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mail is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })
        })

        describe('when password is wrong', () => {
            describe('when password is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail on empty or blank password', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })

            describe('when password is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on non-string password', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'password is empty or blank')
                })
            })
        })
    })
    after(mongoose.disconnect)
}) 