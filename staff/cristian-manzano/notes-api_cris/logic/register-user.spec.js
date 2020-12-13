require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const registerUser = require('./register-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('registerUser()', () => {
    let client, db, users

    before(done => {
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        client.connect((error, connection) => {
            if (error) return done(error)

            context.connection = connection

            db = connection.db(DB_NAME)

            users = db.collection('users')

            done()
        })
    })
    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should succeed on new user', done => {
            registerUser(fullname, email, password, error => {
                expect(error).to.be.null

                users.findOne({ email, password }, (error, user) => {
                    expect(error).to.be.null

                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)

                    done()
                })
            })
        })



        afterEach(done =>
            users.deleteOne({ email, password }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })


    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()
                done()
            })
        })

        it('should fail on already existing user', done => {
            registerUser(fullname, email, password, error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`e-mail ${email} already registered`)

                done()
            })
        })
        afterEach(done =>
            users.deleteOne({ email, password }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })

    describe('when wrong credentials', () => {
        let fullname, email, password, userId

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            it('should fail on wrong email', done => {
                registerUser(fullname, `wrong${email}`, password, error => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal('wrong email')

                    done()
                })
            })

            describe('when wrong credentials', () => {
                it('should fail on wrong password', done => {
                    registerUser(fullname, email, `wrong${password}`, error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('wrong password')

                        done()
                    })
                })
            })

        })
    })
    after(done => client.close(error => {
        if (error) return done(error)
        
        done()
    }))
})
