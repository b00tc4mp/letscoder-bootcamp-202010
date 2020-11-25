require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

const registerUser = require('./register-user')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('registerUser()', () => {
    let client, db, users

    before(() => {

        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client.connect()
            .then(connection => {
                context.connection = connection

                db = connection.db(DB_NAME)

                users = db.collection('users')
            })
    })

    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password

        })

        it('should succeed on new user', () =>
            registerUser(fullname, email, password, repassword)
                .then(() =>
                    users.findOne({ fullname, email, password })
                )
                .then(_user => {
                    expect(user).to.exist
                    expect(_user.fullname).to.equal(fullname)
                    expect(_user.email).to.equal(email)
                    expect(_user.password).to.equal(password)
                })
        )

        afterEach(() =>
            users
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))

        )
    })


    describe('when user already exists', () => {
        let fullname, email, password

        beforeEach(() => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password

            const user = { fullname, email, password }

            return users.insertOne(user)
        })

        it('should fail on existing user', () =>
            registerUser(fullname, email, password, repassword)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`e-mail ${email} already registered`)
                })
        )
        afterEach(() =>
            users
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))

        )
    })
    describe('when any parameter is wrong', () => {
        describe('when e-mail is wrong', () => {
            describe('when e-mails is not a string', () => {
                let fullname, email, password, repassword

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                    repassword = password
                })

                it('should fail on non-string email', () => {
                    expect(() => registerUser(fullname, email, password, repassword, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let fullname, email, password, repassword

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                    repassword = password
                })

                it('should fail on empty or blank email ', () => {
                    expect(() => registerUser(fullname, email, password, repassword, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })
        })

    })
    after( () => client.close() )
})