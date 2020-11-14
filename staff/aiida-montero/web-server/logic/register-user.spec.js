const { expect } = require('chai')
const registerUser = require('./register-user.js')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const fs = require('fs')



describe(' SPEC registerUser()', () => {
    describe('when user already exists', () => {
        let id, fullname, email, password, file

        beforeEach(done => {
            let id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }

            file = `./data/users/${id}`.json

            done()

        })
                                                
        it('should succed on new user credentials', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error).to.be.null
                done()

            })

        })
    })
//-------------------------------------------------------------------------------------------

    describe('when user does not exist', () => {
        let id, fullname, email, password, file

        beforeEach( done =>{
            let id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }
            
            file = `./data/users/${id}.json`

            done()
        })

        it('should happen if user does not exist', done => {
            registerUser(fullname, email, password, (error) =>{
                
            fs.writeFile(file, json, done)
            
            const json = JSON.stringify(user)

                expect(error).to.exist
                done()

            })
            afterEach(done => fs.unlink(file, done))
        })


    })
//------------------------------------------------------------------------------------------------------------------

   describe ('when e-mail is not a string',() => {
   let id, fullname, email, password, file

   beforeEach( done => {
    let id = createId()
    fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
    email = [1, true, null, undefined, {}, [], function () { }, new Date].random()
    password = randomStringWithPrefix('password')
    
    file = `./data/users/${id}`.json
    done()
   })

   it ('should fail on non string email', () => {
            expect(() => registerUser(fullname, email, password, () => { })).to.throw(TypeError, `${e-mail}is not an e-mail`)
        
   
})
   })

   })

