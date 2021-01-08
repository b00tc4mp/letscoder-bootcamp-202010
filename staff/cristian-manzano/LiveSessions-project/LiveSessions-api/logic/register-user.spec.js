require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const registerUser = require('./register-user')
const mongoose = require('mongoose')
const { User } = require('../models')



const { env: { MONGODB_URL } } = process

describe('registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let fullname, email, password, role

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            role = ['ARTIST', 'PROMOTER'].random()
        })

        it('should succeed on new user', () =>
            registerUser(fullname, email, password, role)
                .then(() =>
                    User.findOne({ email })
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    expect(user.email).to.equal(email)
                    expect(user.role).to.equal(role)
                    expect(user.password).to.equal(password)

                })
        )

        afterEach(() =>
            User
                .deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user already exists', () => {
        let fullname, email, password, role

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            role = ['ARTIST', 'PROMOTER'].random()

            const user = { fullname, email, password }

            return User.create(user)
        })

        it('should fail on existing user', () =>
            registerUser(fullname, email, password, role)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with e-mail ${email} already exists`)
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
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                    role = ['ARTIST', 'PROMOTER'].random()
                    
                })

                it('should fail when email is not an string', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                    role = ['ARTIST', 'PROMOTER'].random()
                    
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                    role = ['public', 'private'].random()
                    
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(Error, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                    role = ['ARTIST', 'PROMOTER'].random()
                    
                })

                it('should fail when password is not an string', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })
        })

        describe('when fullname is wrong', () => {
            describe('when fullname is empty or blank', () => {
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = randomEmptyOrBlankString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    role = ['ARTIST', 'PROMOTER'].random()
                    
                })

                it('should fail on an empty or blank fullname', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(Error, 'fullname is empty or blank')
                })
            })

            describe('when fullname is not a string', () => {
                let fullname, email, password, role

                beforeEach(() => {
                    fullname = randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    role = ['ARTIST', 'PROMOTER'].random()
                    
                })

                it('should fail when fullname is not an string', () => {
                    expect(() => registerUser(fullname, email, password, role, () => { })).to.throw(TypeError, `${fullname} is not a fullname`)
                })
            })
        })

        // describe('when role is wrong', () => {


        //     describe('when role is not a string', () => {
        //         let fullname, email, password, role

        //         beforeEach(() => {
        //             fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
        //             email = randomWithPrefixAndSuffix('email', '@mail.com')
        //             password = randomStringWithPrefix('password')
        //             role = ['ARTIST', 'PROMOTER'].random()

        //         })

        //         it('should fail when role is not an string', () => {
        //             expect(() => registerUser(fullname, email, password, ['sagsafgdafg'], () => { })).to.throw(TypeError, `${role} is not an role`)
        //         })
        //     })
        // })
    }) 

    after(mongoose.disconnect)
})  