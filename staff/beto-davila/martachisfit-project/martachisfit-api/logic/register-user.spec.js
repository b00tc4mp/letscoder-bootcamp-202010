require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
const registerUser = require('./register-user')
const { models: { User }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC registerUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user does not exist', () => {
        let fullname, email, password, calories

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)
        })
        it('should succeed on new user', () =>
            registerUser(fullname, email, password, calories)
                .then(() => User.findOne({ email }))
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    expect(user.email).to.equal(email)
                    expect(user.calories).to.equal(calories)
                })
        )

        afterEach(() => User.deleteOne({ email }).then(result => expect(result.deletedCount).to.equal(1)))
    })

    describe('when user already exists', () => {
        let fullname, email, password, calories

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            const user = { fullname, email, password, calories }

            return User.create(user)
        })

        it('should fail on existing user', () =>
            registerUser(fullname, email, password, calories)
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

    after(mongoose.disconnect)
})