require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const registerUser = require('./register-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('registerUser()', () => {
    
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

    describe('when user is new', ()=>{
        let userId, fullname, email, password

        beforeEach(done => {
        
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            //const user = { fullname, email, password }
            
            done()
           
        })
        it('should succedd on a new user', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error).to.be.null
                
                done()

            })

        })
        afterEach(done =>
            /* users.findOne({fullname, email, password}, (error, user) => {
                if (error) return done(error)

                let result */

                users.deleteOne({ email, password }, (error, result) => {
                    if (error) return done(error)
    
                    expect(result.deletedCount).to.equal(1)
    
                    done()
                })
            //})
        )
    })

    describe('when user already exists', ()=>{
        let fullname, email, password

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
        it('should fail when already exists a user with the same credentials', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error.message).to.equal(`e-mail ${email} already registered`)
                
                done()

            })

        })
        afterEach(done =>
            users.findOne({fullname, email, password}, (error, user) => {
                if (error) return done(error)

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
            describe('when e-mail is not a string', () => {
                let email, password

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail when email is not an string', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let email, password

                beforeEach(() => {
                    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail when password is not an string', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })
        })

        describe('when fullname is wrong', () => {
            describe('when fullname is empty or blank', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname = randomEmptyOrBlankString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank fullname', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(Error, 'fullname is empty or blank')
                })
            })

            describe('when fullname is not a string', () => {
                let fullname, email, password

                beforeEach(() => {
                    fullname = randomNonString()
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail when fullname is not an string', () => {
                    expect(() => registerUser(fullname, email, password, () => { })).to.throw(TypeError, `${fullname} is not a fullname`)
                })
            })
        })
        
    })
    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))

})