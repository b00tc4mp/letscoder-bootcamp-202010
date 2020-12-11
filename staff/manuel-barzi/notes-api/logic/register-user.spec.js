require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('notes-utils/randoms')
const registerUser = require('./register-user')
const { mongoose, models: { User } } = require('notes-data')
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL } } = process

describe('registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should succeed on new user', () =>
            registerUser(fullname, email, password)
                .then(() =>
                    User.findOne({ email })
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)

                    return bcrypt.compare(password, user.password)
                })
                .then(match => expect(match).to.be.true)
        )

        afterEach(() => User.deleteMany())
    })

    describe('when user already exists', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
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

        afterEach(() => User.deleteMany())
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})