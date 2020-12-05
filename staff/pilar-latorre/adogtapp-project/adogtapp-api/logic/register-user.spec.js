require('dotenv').config()

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const registerUser = require('./register-user')
const { User } = require('../models')
const bcrypt = require('bcryptjs')



const { env: { MONGODB_URL } } = process

describe('registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let userName, email, password, address, city, phone, description

        beforeEach(() => {
            userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            address = randomStringWithPrefix('address')
            city = randomStringWithPrefix('city')
            phone = randomStringWithPrefix('phone')
            description = randomStringWithPrefix('description')

        })

        it('should succeed on new user', () =>
            registerUser(userName, email, password, address, city, phone, description)
                .then(() =>
                    User.findOne({ email })
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.userName).to.equal(userName)

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
        let userName, email, password, address, city, phone, description

        beforeEach(() => {
            userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            address = randomStringWithPrefix('address')
            city = randomStringWithPrefix('city')
            phone = randomStringWithPrefix('phone')
            description = randomStringWithPrefix('description')

            const user = { userName, email, password, address, city, phone, description }

            return User.create(user)
        })

        it('should fail on existing user', () =>
            registerUser(userName, email, password, address, city, phone, description)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`shelter with e-mail ${email} already registered`)
                })
        )

        afterEach(() =>
            User
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when any parameter is wrong', () => {
        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when email is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(Error, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when password is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })
        })

        describe('when userName is wrong', () => {
            describe('when userName is empty or blank', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = randomEmptyOrBlankString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank userName', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(Error, 'userName is empty or blank')
                })
            })

            describe('when userName is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when userName is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${userName} is not a userName`)
                })
            })
        })

        describe('when address is wrong', () => {
           

            describe('when address is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomNonString()
                    city = randomStringWithPrefix('city')
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when address is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${address} is not an address`)
                })
            })
        })

        describe('when city is wrong', () => {
            describe('when city is empty or blank', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomEmptyOrBlankString()
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank city', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(Error, 'city is empty or blank')
                })
            })

            describe('when city is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('city')
                    city = randomNonString()
                    phone = randomStringWithPrefix('phone')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when city is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${city} is not a city`)
                })
            })
        })

        describe('when phone is wrong', () => {
            describe('when phone is empty or blank', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomEmptyOrBlankString()
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank phone', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(Error, 'phone is empty or blank')
                })
            })

            describe('when phone is not a string', () => {
                let userName, email, password, address, city, phone, description

                beforeEach(() => {
                    userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    address = randomStringWithPrefix('address')
                    city = randomStringWithPrefix('city')
                    phone = randomNonString()
                    description = randomStringWithPrefix('description')
                })

                it('should fail when phone is not an string', () => {
                    expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${phone} is not a phone`)
                })
            })
        })

        describe('when description is not a string', () => {
            let userName, email, password, address, city, phone, description

            beforeEach(() => {
                userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')
                address = randomStringWithPrefix('address')
                city = randomStringWithPrefix('city')
                phone = randomStringWithPrefix('phone')
                description = randomNonString()
            })

            it('should fail when description is not an string', () => {
                expect(() => registerUser(userName, email, password, address, city, phone, description, () => { })).to.throw(TypeError, `${description} is not a description`)
            })
        })
    }) 

    after(mongoose.disconnect)
}) 