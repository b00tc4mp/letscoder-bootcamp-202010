require('dotenv').config()

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/random')
const registerUser = require('./register-user')
const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { ContentError, LengthError, ValueError, FormatError, ConflictError, NotFoundError  } = require('../errors')


const { env: { MONGODB_URL } } = process

describe('registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let name, email, password

        beforeEach(() => {
            name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should succeed on new user', () =>
            registerUser(name, email, password)
                .then(() =>
                    User.findOne({ email })
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.name).to.equal(name)

                    return bcrypt.compare(password, user.password)
                })
                .then(match => expect(match).to.be.true)
        )

        afterEach(() =>
            User
                .deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user already exists', () => {
        let name, email, password

        beforeEach(() => {
            name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { name, email, password }

            return User.create(user)
        })

        it('should fail on existing user', () =>
            registerUser( name, email, password )
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with ${email} already registered`)
                })
        )

        afterEach(() =>
            User
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when any parameter is wrong', () => {

        describe('when name is wrong', () => {
            describe('when name is empty or blank', () => {
                let name, email, password

                beforeEach(() => {
                    name= randomEmptyOrBlankString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(ContentError, 'name is empty or blank')
                })
            })

            describe('when name is not a string', () => {
                let name, email, password

                beforeEach(() => {
                    name= randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on a non string name', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(Error, `${name} is not a name`)
                })
            })
        })

        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let name, email, password

                beforeEach(() => {
                    name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail in a non string e-mail', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(Error, `${email} is not an e-mail`)
                })
            })

            describe('when email is empty or blank', () => {
                let name, email, password

                beforeEach(() => {
                    name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let name, email, password

                beforeEach(() => {
                    name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(ContentError, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let name, email, password

                beforeEach(() => {
                    name= `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail when password is not an string', () => {
                    expect(() => registerUser(name, email, password, () => { })).to.throw(Error, `${password} is not a password`)
                })
            })
        })
    }) 
    after(mongoose.disconnect)
}) 