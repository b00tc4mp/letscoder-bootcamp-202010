const { expect } = require('chai')
const authenticateUser = require('./authenticate-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('../utils/randoms')
const fs = require('fs')

describe('SPEC authenticateUser()', () => {
    describe('when user already exists', () => {
        let id, fullname, email, password, file

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')}${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email','@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }
            const json = JSON.stringify(user)
            
            file = `./data/users/${id}.json`

            fs.writeFile(file, json, done)
        })

        it('should succed on correct credentials', done => {
            authenticateUser(email, password, (error, userId) => {
                expect(error).to.be.null

                expect(userId).to.be.a('string')
                expect(userId).to.have.length.greaterThan(0)

                done()

            })
        })

        it('should fail on wrong credentials', () => {
            // TODO
        })

        afterEach(done => {
            fs.unlink(file, done)
        })
    })
    describe('when user does not exist', () => {
        // TODO
    })
    describe('when any parameter is wrong', () => {
        //TODO
    })
})