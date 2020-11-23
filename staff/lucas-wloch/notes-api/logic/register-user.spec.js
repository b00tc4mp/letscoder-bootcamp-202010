require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

const registerUser = require('./register-user')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')

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

        beforeEach(done => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password
            
            done()
        })

        it('should succeed on non existing user', done => {
            registerUser(fullname, email, password, repassword, error => {
                expect(error).to.be.null

                users.findOne({ fullname, email, password }, (error, _user) => {
                    expect(error).to.be.null

                    expect(_user.fullname).to.equal(fullname)
                    expect(_user.email).to.equal(email)
                    expect(_user.password).to.equal(password)

                    done()
                })
            })
        })

        afterEach(done =>
            users.findOne({ fullname, email, password }, (error, user) => {
                users.deleteOne({ _id: ObjectId(user._id) }, (error, result) => {
                    if (error) return done(error)

                    expect(result.deletedCount).to.equal(1)

                    done()
                })
            })

        )

    })
    describe('when user already exists', () => {
        let fullname, email, password, user

        beforeEach(done => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password

            user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                done()
            })

        })
        it('should fail on existing user', done => {
            registerUser(fullname, email, password, repassword, error => {
                expect(error).to.exist

                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`e-mail ${email} already registered`)

                done()

            })
        })
        afterEach(done =>
            users.findOne({ fullname, email, password }, (error, user) => {
                users.deleteOne({ _id: ObjectId(user._id) }, (error, result) => {
                    if (error) return done(error)

                    expect(result.deletedCount).to.equal(1)

                    done()
                })
            })

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
                    expect(() => registerUser(fullname,email, password,repassword, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
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
                    expect(() => registerUser(fullname, email, password, repassword,  () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })
        })

    })
    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))
})