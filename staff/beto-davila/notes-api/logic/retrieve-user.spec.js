require('dotenv').config()
const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('SPEC retrieveUser()', () => {
    let client, db, users

    // creating db connection for all cases 
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

    describe('when user does exist', () => {
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

        it ('should suceed on right id', done => {

            retrieveUser(userId, (error, user) => {
                expect(error).to.be.null

                expect(user).to.be.instanceOf(Object)
                expect(user.fullname).to.equal(fullname)
                expect(user.email).to.equal(email)

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

    describe('when the user does not exist (but existed before)',() => {
        let fullname, email, password, userId

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()

                users.deleteOne(user, (error, result) => {
                    if (error) return done(error)
        
                    expect(result.deletedCount).to.equal(1)
                })
            done()
            })

        })
        it('should fail on right id', (done) => {
            retrieveUser(userId, (error, user) => {
                expect(error).to.be.instanceOf(Error)
                expect(user).to.be.undefined

                expect(userId).to.equal(userId)
                expect(error.message).to.equal(`The user with id ${userId} was not found`)

                done()
            })
        })

    })

    describe('when userId is not an string', () => {
        let userId

        beforeEach( () => {
            userId = randomNonString()
        })

        it('should fail on non-string userId', () => {
            expect( () => {
                retrieveUser(userId, function () { })
            }).to.throw(TypeError, `${userId} is not an id`)
        })
    })

    describe('when userId is empty or blank', () => {
        let userId

        beforeEach( () => {
            userId = randomEmptyOrBlankString()
        })

        it('should fail on empty or blank userId', () => {
            expect( () => {
                retrieveUser(userId, () => { })
            }).to.throw(Error, 'id is empty or blank')
        })
    })

    describe('when userId does not have the right length', () => {
        let userId

        beforeEach( () => {
            userId = '5fb8fad9a15a822fff0a201b32'
        })

        it('should fail on not having 24 digits', () => {
            expect( () => {
                retrieveUser(userId, () => { })
            }).to.throw(Error, 'id length is not 24 digits')
        })
    })

    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))

})