require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const registerUser = require('./register-user')

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

    describe('when user is new', ()=>{
        let fullname, email, password

        beforeEach(() => {
        
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password') 
         
        })
        it('should succedd on a new user', () => 
            registerUser(fullname, email, password) 
                .then(() => 
                    users.findOne({email, password})
                )
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    expect(user.email).to.equal(email)

                }) 
             
        )
        afterEach(() =>
           
                users
                    .deleteOne({ email, password }) 
                    .then(result => expect(result.deletedCount).to.equal(1))     
            
        )
    })

    describe('when user already exists', ()=>{
        let fullname, email, password

        beforeEach(() => {
        
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return users
            .insertOne(user) 
            .then (result => userId = result.insertedId.toString()) 
            
        })
        it('should fail when already exists a user with the same credentials', () => 
            registerUser(fullname, email, password)
                .catch (error => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal(`e-mail ${email} already registered`)
                
                })

        )
        afterEach(() =>
            users
            //.findOne({fullname, email, password})
            //.then (user) 
            //.deleteOne({ _id: ObjectId(user._id) })
            .deleteOne({email,password})
            .then (result => expect(result.deletedCount).to.equal(1))
    
               
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
    after(() => client.close()) 
    

})