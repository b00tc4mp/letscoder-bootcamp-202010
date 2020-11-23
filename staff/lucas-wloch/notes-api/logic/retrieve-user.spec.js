require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

const retrieveUser = require('./retrieve-user')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('retrieveUser()', () => {
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

    describe('when user exists', () => {
        let userId, fullname, email, password, user

        beforeEach(done => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()

                done()
            })
        })

        it('should succeed on existing user', done => {
            retrieveUser(userId, (error, _user) => {
                expect(error).to.be.null

                expect(_user.fullname).to.equal(user.fullname)
                expect(_user.email).to.equal(user.email)
                expect(_user.password).to.equal(undefined)
                expect(userId).to.equal(_user.id.toString())

                done()
            })
        })


        it('should fail on wrong user id', done => {
            const wrongId = "5fba582a843ccd4700000000"
            retrieveUser(wrongId, (error, _user) => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`user with id ${wrongId} is not found`)

                expect(_user).to.be.undefined

                done()
            })
        })
        it('should fail on wrong user id', done => {
            try{
                retrieveUser(`wrong${userId}`, () => {})
            } catch (error){
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`id length is not 24`)
                done()
                
            }
            
        })
        afterEach(done =>
            users.deleteOne({ _id: ObjectId(userId) }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })


    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))
})