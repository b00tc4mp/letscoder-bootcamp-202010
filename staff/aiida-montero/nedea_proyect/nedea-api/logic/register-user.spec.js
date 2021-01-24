require('dotenv').config()
const { ContentError, LengthError } = require('../errors')
const bcrypt = require('bcryptjs')
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const registerUser = require('./register-user')
const { models: { User }, mongoose } = require('nedea-data')

const { env: { MONGODB_URL } } = process

describe('registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should succeed on new user', () =>
            registerUser(fullname, email, password)
                .then(() =>
                    User.findOne({ email})
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    return bcrypt.compare(password, user.password)
                    
                })
                .then(match => expect(match).to.be.true)

        )

        afterEach(() =>
            User
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(0))
        )
    })

    describe('when user already exists', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
        })

        it('should fail on existing user', () =>
            registerUser(fullname, email, password)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with e-mail ${email} already registered`)
                })
        )

        afterEach(() =>
            User
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    // TODO more unit test cases
    describe('when any parameter is wrong', () => {

        describe('when fullname is wrong', () => {
            describe('when fullname is empty or blank', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= randomEmptyOrBlankString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank fullname', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(ContentError, 'fullname is empty or blank')
                })
            })

            describe('when fullname is not a string', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on a non string fullname', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, `${fullname} is not a fullname`)
                })
            })
        })

        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail in a non string e-mail', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, `${email} is not an e-mail`)
                })
            })

            describe('when email is empty or blank', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(ContentError, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname= `${randomStringWithPrefix('fullname')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail when password is not an string', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, `${password} is not a password`)
                })
            })
        })
    }) 
    after(mongoose.disconnect)
}) 
  
