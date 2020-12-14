import registerUser from './register-user'
import context from './context'

require('dotenv').config()

const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('notes-utils/randoms')

const { mongoose, models: { User } } = require('notes-data')
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL, REACT_APP_API_URL: API_URL } } = process

context.API_URL = API_URL

describe('registerUser()', () => {
    beforeAll(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

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
                    expect(user).toBeDefined()
                    expect(user.fullname).toBe(fullname)

                    return bcrypt.compare(password, user.password)
                })
                .then(match => expect(match).toBeTruthy())
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
                    expect(error).toBeInstanceOf(Error)

                    expect(error.message).toBe(`user with e-mail ${email} already registered`)
                })
        )

        afterEach(() => User.deleteMany())
    })

    // TODO more unit test cases

    afterAll(mongoose.disconnect)
})