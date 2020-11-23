require('dotenv').config()
const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const registerUser = require('./register-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('SPEC registerUser()', () => {
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

    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it ('should suceed on correct registration', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error).to.be.null

                users.findOne({email, password}, (error, user) => {
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

    describe('when user does exist already', () => {
        let fullname, email, password

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

            done()

            })
        })

        it('should fail on already registered user', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`the email ${email} was registered already`)

                done()
            })
        })
        afterEach(done =>
            users.deleteOne({ email }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })
    describe('when any parameter is wrong', () => {
        describe('when fullname is wrong', () => {
            describe('when fullname is not a string', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname = randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')

                })
                it('should fail on wrong fullname', () => {
                    expect(() => registerUser(fullname, email, password, () => {})).to.throw(TypeError, fullname + ' is not a fullname')
                    
                })
            })
            describe('when fullname is empty or blank', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname = ''
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')

                })
                it('should fail on wrong fullname', () => {
                    expect(() => registerUser(fullname, email, password, () => {})).to.throw(Error, 'fullname is empty or blank')
                    
                })
            })
        })

            describe('when email is wrong', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '-mail.com')
                    password = randomStringWithPrefix('password')

                })
                it('should fail on wrong email', () => {
                    expect(() => registerUser(fullname, email, password, () => {})).to.throw(Error,'invalid e-mail')

                })

            })
        })
        after(done => client.close(error => {
            if (error) return done(error)
    
            done()
        }))
})