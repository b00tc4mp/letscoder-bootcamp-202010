const { expect } = require('chai')
const authenticateUser = require('./authenticate-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString } = require('../utils/randoms')
const fs = require('fs')

describe('authenticateUser()', () => {
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

        it('should succeed on correct credentials', done => {
            authenticateUser(email, password, (error, userId) => {
                expect(error).to.be.null
                debugger
                expect(userId).to.be.a('string')
                expect(userId).to.have.length.greaterThan(0)

                done()
            })
        })

        it('should fail on wrong e-mail', done => {

            authenticateUser(`wrong${email}`, password, (error, userId) => {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.equal("wrong credentials")
                expect(userId).to.be.undefined
                done()
            })
        })
        it('should fail on wrong password', done => {

            authenticateUser(email, `wrong${password}`, (error, userId) => {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.equal("wrong credentials")
                expect(userId).to.be.undefined
                done()

            })
        })

        afterEach(done => fs.unlink(file, done))
    })

    describe('when user does not exist', () => {
        let email, password

        beforeEach(() => {
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should fail not matching credentials', done => {
            authenticateUser(email, `wrong${password}`, (error, userId) => {
                expect(error).to.be.an.instanceof(Error)
                expect(error.message).to.equal("wrong credentials")
                expect(userId).to.be.undefined
                done()

            })
        })


    })

    describe('when email is wrong', () => {
        let email, password

        beforeEach(() => {
            email = randomNonString()
            password = randomStringWithPrefix('password')
            
        })
        it(' should fail on non-string email', ()=> {

                try {
                    authenticateUser(email, password, function () { })
                } catch (error) {
                    expect(error).to.be.an.instanceof(Error)
                    expect(error.message).to.equal(`${email} is not an e-mail`)
                    
                }
                
        })

    })
})