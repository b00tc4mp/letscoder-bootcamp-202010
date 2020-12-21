require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomGameConsole, randomNotStringNumber, randomId, randomNotId, randomWrongLengthId, randomInteger } = require('../utils/randoms')
const { models: { User, Game }, mongoose: { Types: { ObjectId } }, mongoose } = require('gameloop-data')
const modifyUser = require('./modify-user')
const { env: { MONGODB_URL } } = process
const { ContentError, LengthError } = require('../errors')

describe('modifyUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })
        it('should succeed updating the user', () => {
            let fullname, contact, phone, city

            fullname = `${randomStringWithPrefix('name')}`
            contact = `${randomStringWithPrefix('contact')}`
            phone = `${randomStringWithPrefix('phone')}`
            city = `${randomStringWithPrefix('city')}`

            return modifyUser(userId, fullname, contact, phone, city)
                .then(changes => {
                    expect(changes).to.be.instanceOf(Object)
                    return User.find({ fullname })
                        .then(user => {
                            expect(user[0].fullname).to.equal(fullname)
                            expect(user[0].contact).to.equal(contact)
                            expect(user[0].phone).to.equal(phone)
                            expect(user[0].city).to.equal(city)
                        })
                })
        })
    })

    describe('when user does not exists', () => {
        let userId, fullname, contact, phone, city

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')}`
            contact = `${randomStringWithPrefix('contact')}`
            phone = `${randomStringWithPrefix('phone')}`
            city = `${randomStringWithPrefix('city')}`
            userId = randomId()
        })
        it('should fail updating a non existing user', () => {
            return modifyUser(userId, fullname, contact, phone, city)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal(`user ${email} is already registered`)
                })
        })
    })

    describe('when any parameter is wrong', () => {
        describe('when fullname is wrong', () => {
            describe('when fullname is empty or blank', () => {
                let userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = randomEmptyOrBlankString()
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on an empty or blank fullname', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(ContentError, 'fullname is empty or blank')
                })
            })

            describe('when fullname is not a string', () => {
                let userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = randomNonString()
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on a non string fullname', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(TypeError, `${fullname} is not a fullname`)
                })
            })
        })

        describe('when contact is wrong', () => {
            describe('when contact is not a string', () => {
                let userId, fullname, contact, phone, city


                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = randomNonString() 
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail in a non string contact', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(TypeError, `${contact} is not a contact`)
                })
            })

            describe('when contact is empty or blank', () => {
                let userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = randomEmptyOrBlankString()
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on an empty or blank contact', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(ContentError, 'contact is empty or blank')
                })
            })
        })
        describe('when phone is wrong', () => {
            describe('when phone is empty or blank', () => {
                let userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = randomEmptyOrBlankString() 
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(ContentError, 'phone is empty or blank')
                })
            })

            describe('when phone is not a string', () => {
                let  userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = randomNonString() 
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail when password is not an string', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(TypeError, `${phone} is not a phone`)
                })
            })
        })

        describe('when city is wrong', () => {
            describe('when city is empty or blank', () => {
                let userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = randomEmptyOrBlankString() 
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(ContentError, 'city is empty or blank')
                })
            })

            describe('when city is not a string', () => {
                let  userId, fullname, contact, phone, city

                beforeEach(() => {
                    userId = randomId()
                    fullname = `${randomStringWithPrefix('fullname')}`
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = randomNonString()
                })

                it('should fail when city is not an string', () => {
                    expect(() => modifyUser(userId, fullname, contact, phone, city, () => { })).to.throw(TypeError, `${city} is not a city`)
                })
            })
        })
        afterEach(() => User.deleteMany())
    })
    after(mongoose.disconnect)
})
