require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const context = require('./context')
const retrieveUser = require('./retrieve-user')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('retrieveUser()', () => {
    
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
    describe('when user already exists', ()=>{
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
        it('should succeed when user already exists', done => {
            retrieveUser(userId, (error, user) => {
                expect(error).to.be.null
                expect(user).to.be.a('object')
                expect(user.id).to.be.a('string')
                expect(userId).to.equal(user.id)
                expect(fullname).to.equal(user.fullname)
                expect(email).to.equal(user.email)
                expect(user.password).to.be.undefined

                
                done()

            })

        })

        it('should fail non existing user', done => {
            const wrongId = '5fb8f86644948c23d0000000'

            retrieveUser(wrongId, (error, _user) => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`user with id ${wrongId} not found`)
                
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


        it('should fail on a non string id', done => {
            nonStringId = randomNonString()

            try{
                retrieveUser(nonStringId, () => {})
            } catch (error){
                expect(error).to.be.instanceOf(TypeError)
                expect(error.message).to.equal(nonStringId + ' is not a id')
                done()
                
            }
            
        })

        
        it('should fail on an empty or blank id', done => {
            emptyId = randomEmptyOrBlankString()

            try{
                retrieveUser(emptyId, () => {})
            } catch (error){
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('id is empty or blank')
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