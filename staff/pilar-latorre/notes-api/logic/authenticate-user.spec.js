require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const authenticateUser = require('./authenticate-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('authenticateUser()', () => {
    let client, db, users

    before(() => {
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client.connect()
            .then (connection => {
            
            context.connection = connection

            db = connection.db(DB_NAME)

            users = db.collection('users')
            
        })
    })

     describe('when user already exists', () => {

        let userId, fullname, email, password

        beforeEach(()=> {
        
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return users
            .insertOne(user)
            .then (result => userId = result.insertedId.toString())
               
        })

        it('should succeed on correct credentials', () => {
            authenticateUser(email, password)
                .then (_userId => expect(_userId).to.equal(userId))
                
        })

        describe('when wrong credentials', () => {
            it('should fail on wrong e-mail', () => {
                authenticateUser(`wrong${email}`, password)
                    .catch (userId => {   
                        expect(userId).to.be.undefined

                    .catch (error => {     
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('wrong credentials')


                    })
                    }) 
                })
            })

            it('should fail on wrong password', () => 
                authenticateUser(email, `wrong${password}`)
                    .catch (error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('wrong credentials')

                })
            )

        afterEach(() => 
            users
                .deleteOne({ _id: ObjectId(userId) })
                .then( result => {expect(result.deletedCount).to.equal(1)})
 
        )    
        
    }) 

    describe('when user does not exist', () => {
        let email, password

        beforeEach(() => {
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should fail on valid credentials', () => {
            authenticateUser(email, password) 
            .catch(userId => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('wrong credentials')

                expect(userId).to.be.undefined

            
            })
        })
    })

    describe('when any parameter is wrong', () => {
        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail when email is not an string', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mails is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })

        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on an empty or blank password', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(Error, 'password is empty or blank')
                })
            })

            describe('when password is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail when password is not an string', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })
        })

    })
    after(() => client.close()) 


 })
