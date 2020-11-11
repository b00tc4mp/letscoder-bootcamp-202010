const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('../utils/randoms')
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




})