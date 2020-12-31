require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('martachisfit-utils').randoms
const authenticateUser = require('./authenticate-user')
const { models: { User }, mongoose } = require('martachisfit-data')
const bcryptjs = require('bcryptjs')

const { env: { MONGODB_URL } } = process

describe('SPEC authenticateUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let userId, fullname, email, password, calories

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            return bcryptjs.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash, calories }

                    return User.create(user)
                        .then(user => userId = user.id)
                })
        })

        it('should succeed on correct credentials', () =>
            authenticateUser(email, password).then(_userId => expect(_userId).to.equal(userId)))

        describe('when wrong credentials', () => {
            it('should fail on wrong e-mail', () =>
                authenticateUser(`hola${email}`, password)
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
            User.deleteOne({ _id: userId }).then(result => expect(result.deletedCount).to.equal(1)))
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
            describe('when e-mails is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on empty or blank email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on non-string email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })
        })

        // TODO password is wrong and subcases
        // TODO callback is wrong
    })

    after(mongoose.disconnect)
})