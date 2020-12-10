const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonFunction, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const fs = require('fs')


describe('SPEC retrieveUser()', () => {
    
    describe('when user already exists', () => {
        let id, fullname, email, password, file

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user)

            file = `./data/users/${id}.json`

            fs.writeFile(file, json, done)

        })

        it('should succeed on matching id', done => {
            retrieveUser(id, (error, user) => {

                expect(error).to.be.null
                
                const { id: _id, email: _email, fullname: _fullname } = user

                    expect(id).to.be.a('string')
                    expect(id).to.equal(_id)
                    expect(email).to.be.a('string')
                    expect(email).to.equal(_email)
                    expect(fullname).to.be.a('string')
                    expect(fullname).to.equal(_fullname)
                
                done()
            })
        })
     
        afterEach(done => fs.unlink(file, done))
    })

    describe('when id is not matching', () => {
       
        let id 
      
        beforeEach(()=>{
            id = createId()
        })
      
        it('should fail on non matching id', done => {
            retrieveUser(id, (error, user) => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('id does not match with any user')

                expect(user).to.be.undefined

                done()
            })
        })

        
    })

    describe('when id is not a string', () => {
       
        let id 
      
        beforeEach(()=>{
           
            id = randomNonString()
        })
      
        it('should fail on non string id',() => {
            expect(() => retrieveUser(id, () => { })).to.throw(TypeError, `${id}  is not a id`)
        })

        
    })

    describe('when id is empty or blank', () => {
       
        let id 
      
        beforeEach(()=>{
            id = randomEmptyOrBlankString()
        })
      
        it('should fail on empty or blank id', () => {
            expect(() => retrieveUser(id, () => { })).to.throw(Error, 'id is empty or blank')
        })

    })

    describe('when id lenght is greater than 31', () => {
       
        let id 
      
        beforeEach(()=>{
            id = createId + 1
        })
      
        it('should fail on larger than 31 id length', () => {
            expect(() => retrieveUser(id, () => { })).to.throw(Error, `${id} is not a valid id`)
        })

    })


    describe('when callback is not a function', () => {
        let id, fullname, email, password, file, callback

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            callback = randomNonFunction('callback')

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user)

            file = `./data/users/${id}.json`

            fs.writeFile(file, json, done)

        })

        it('should fail a non function callback', () => {
            expect(()=> retrieveUser(id, callback)).to.throw(TypeError, `${callback} is not a callback`)
        })
     
        afterEach(done => fs.unlink(file, done))
    })


})