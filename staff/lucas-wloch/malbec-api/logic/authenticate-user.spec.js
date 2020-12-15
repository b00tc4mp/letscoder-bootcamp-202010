require('dotenv').config()

const { expect } = require('chai')
const { models: { User }, mongoose } = require('malbec-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const { FormatError } = require('../errors')
const authenticateUser = require('./authenticate-user')
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL } } = process

describe('authenticateUser() SPEC', () => {
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

                    return User.create(user)
                        .then(user => userId = user.id)
                })
        })

        it('should succed correct credentials', () =>
            authenticateUser(email, password)
                .then(_userId => expect(_userId).to.equal(userId))
        )

        describe('on wrong credentials', () => {
            it('should fail on wrong e-mail', () =>
                authenticateUser(`wrong${email}`, password)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`wrong credentials`)
                    })
            )

            it('should fail on wrong password', () =>
                authenticateUser(email, `wrong${password}`)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`wrong credentials`)
                    })
            )
        })

        afterEach(() =>
            User.deleteOne({ _id: userId })
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
            authenticateUser(email, `wrong${password}`)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`wrong credentials`)
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

                it('should fail on non string email', () => {
                    expect(() => authenticateUser(email,password)).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })
            
            describe('when e-mail is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on empty or blank email', () => {
                    expect(() => authenticateUser(email,password)).to.throw(Error, 'e-mail is empty or blank')
                })
            })

            describe('on non valid email', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email','mail..com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on invalid email', () => {
                    expect(() => authenticateUser(email,password)).to.throw(FormatError, 'invalid e-mail')
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

                it('should fail on non string password', () => {
                    expect(() => authenticateUser(email,password)).to.throw(TypeError, `${password} is not a password`)
                })
            })
            
            describe('when password is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on empty or blank password', () => {
                    expect(() => authenticateUser(email,password)).to.throw(Error, 'password is empty or blank')
                })
            })

        })
    })

    after(mongoose.disconnect)
})