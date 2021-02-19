import authenticateUser from './authenticate-user'
import context from './context'

require('dotenv').config()

const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('notes-utils/randoms')
const { mongoose, models: { User } } = require('notes-data')
const bcrypt = require('bcryptjs')
const { AuthError } = require('notes-errors')

const { env: { MONGODB_URL, REACT_APP_API_URL: API_URL } } = process

context.API_URL = API_URL

describe('authenticateUser()', () => {
    beforeAll(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let userId, fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            return bcrypt.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash }

                    return User.create(user)
                        .then(user => userId = user.id)
                })
        })

        it('should succeed on correct credentials', () =>
            authenticateUser(email, password)
                .then(token => expect(typeof token).toBe('string'))
        )

        describe('when wrong credentials', () => {
            it('should fail on wrong e-mail', () =>
                authenticateUser(`wrong${email}`, password)
                    .catch(error => {
                        expect(error).toBeInstanceOf(AuthError)

                        expect(error.message).toBe('wrong credentials')
                    })
            )

            it('should fail on wrong password', () =>
                authenticateUser(email, `wrong${password}`)
                    .catch(error => {
                        expect(error).toBeInstanceOf(AuthError)

                        expect(error.message).toBe('wrong credentials')
                    })
            )
        })

        afterEach(() => User.deleteMany())
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
                    expect(error).toBeInstanceOf(AuthError)

                    expect(error.message).toBe('wrong credentials')
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
                    expect(() => authenticateUser(email, password, () => { })).toThrow(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on non-string email', () => {
                    expect(() => authenticateUser(email, password, () => { })).toThrow(Error, 'e-mail is empty or blank')
                })
            })
        })

        // TODO when password is wrong and its subcases
        // TODO when callback is wrong
    })

    afterAll(mongoose.disconnect)
})