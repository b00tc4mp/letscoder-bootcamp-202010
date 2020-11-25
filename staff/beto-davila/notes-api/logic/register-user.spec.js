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
    before(() => {
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client.connect().then(connection => {

            context.connection = connection

            db = connection.db(DB_NAME)

            users = db.collection('users')
        })
    })

    describe('when user does not exist', () => {
        let fullname, email, password
        debugger
        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it ('should suceed on correct registration', () => {
            registerUser(fullname, email, password).then(() => {

                return users.findOne({email, password}).then(user => {

                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)

                })
            })
        })
        afterEach( () =>
            users.deleteOne({ email }).then(result => expect(result.deletedCount).to.equal(0))
        )
    })

    describe('when user does exist already', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return users.insertOne(user).then(result => undefined)
        })

        it('should fail on already registered user', () => {
            registerUser(fullname, email, password).catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`the email ${email} was registered already`)
            })
        })
        afterEach( () =>
            users.deleteOne({ email }).then(result => expect(result.deletedCount).to.equal(1))
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
        after(() => client.close())
})