require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomNotStringNumber, randomId, randomNotId, randomWrongLengthId, randomInteger } = require('../utils/random')
const { models: { User, Product}, mongoose: { Types: { ObjectId } }, mongoose } = require('mercuris-data')
const modifyUser = require('./modify-user')
const { env: { MONGODB_URL } } = process
const { ContentError, LengthError } = require('../errors')

describe('modifyUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let name, email, password, userId

        beforeEach(() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { name, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })
        it('should succeed updating the user', () => {
            let name, contact,address, phone, city

            name = `${randomStringWithPrefix('name')}`
            contact = `${randomStringWithPrefix('contact')}`
            address = `${randomStringWithPrefix('address')}`
            phone = `${randomStringWithPrefix('phone')}`
            city = `${randomStringWithPrefix('city')}`

            return modifyUser(userId, name, contact, address, city, phone)
                .then(changes => {
                    expect(changes).to.be.instanceOf(Object)
                    return User.find({ name })
                        .then(user => {
                            expect(user[0].name).to.equal(name)
                            expect(user[0].contact).to.equal(contact)
                            expect(user[0].address).to.equal(address)
                            expect(user[0].phone).to.equal(phone)
                            expect(user[0].city).to.equal(city)
                        })
                })
        })
    })

    describe('when user does not exists', () => {
        let userId, name, contact, address, phone, city

        beforeEach(() => {
            name = `${randomStringWithPrefix('name')}`
            contact = `${randomStringWithPrefix('contact')}`
            address = `${randomStringWithPrefix('address')}`
            phone = `${randomStringWithPrefix('phone')}`
            city = `${randomStringWithPrefix('city')}`
            userId = randomId()
        })
        it('should fail updating a non existing user', () => {
            return modifyUser(userId, name, contact, address, city, phone)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal(`user ${email} is already registered`)
                })
        })
    })

    describe('when any parameter is wrong', () => {
        describe('when name is wrong', () => {
            describe('when name is empty or blank', () => {
                let userId, name, contact, address, phone, city

                beforeEach(() => {
                    userId = randomId()
                    name = randomEmptyOrBlankString()
                    contact = `${randomStringWithPrefix('contact')}`
                    address = `${randomStringWithPrefix('address')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => modifyUser(userId, name, contact, address, city, phone, () => { })).to.throw(ContentError, 'name is empty or blank')
                })
            })

            describe('when name is not a string', () => {
                let userId, name, contact, address, city, phone

                beforeEach(() => {
                    userId = randomId()
                    name = randomNonString()
                    contact = `${randomStringWithPrefix('contact')}`
                    address = `${randomStringWithPrefix('address')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on a non string name', () => {
                    expect(() => modifyUser(userId, name, contact, address, city, phone, () => { })).to.throw(TypeError, `${name} is not a name`)
                })
            })
        })

        describe('when contact is wrong', () => {
            
            describe('when contact is empty or blank', () => {
                let userId, name, contact, address, city, phone
                beforeEach(() => {
                    userId = randomId()
                    name = `${randomStringWithPrefix('name')}`
                    address = `${randomStringWithPrefix('address')}`
                    contact = randomEmptyOrBlankString()
                    phone = `${randomStringWithPrefix('phone')}`
                    city = `${randomStringWithPrefix('city')}`
                })

                it('should fail on an empty or blank contact', () => {
                    expect(() => modifyUser(userId, name, contact, address, city, phone, () => { })).to.throw(ContentError, 'contact is empty or blank')
                })
            })
        })
        

        describe('when city is wrong', () => {
            describe('when city is empty or blank', () => {
                let userId, name, contact, address, city, phone

                beforeEach(() => {
                    userId = randomId()
                    name = `${randomStringWithPrefix('name')}`
                    address = `${randomStringWithPrefix('address')}`
                    contact = `${randomStringWithPrefix('contact')}`
                    phone = `${randomStringWithPrefix('phone')}`
                    city = randomEmptyOrBlankString() 
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => modifyUser(userId, name, contact, address, city, phone , () => { })).to.throw(ContentError, 'city is empty or blank')
                })
            })

           
        })
        afterEach(() => User.deleteMany())
    })
    after(mongoose.disconnect)
})