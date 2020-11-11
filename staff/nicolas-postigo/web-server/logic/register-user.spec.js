const { expect } = require('chai')
const registerUser = require('./register-user.js')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString } = require('../utils/randoms')
const fs = require('fs')

describe('registerUser()', () => {
    describe('when user not exist', () => {
        let id, fullname, email, password, file

        it('should succed on new user credentials', done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user)

            file = `./data/users/${id}.json`

            fs.writeFile(file, json, done)
        })
        afterEach(done => fs.unlink(file, done))
    })

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

        it('should fail on already user credentials', done => {
            registerUser(fullname, email, password, (error) => {
                expect(error).to.exist
                expect(error).to.be.instanceof(Error)
                expect(error.message).to.equal(`e-mail ${email} already registered`)
            })
            done()
        })
        afterEach(done => fs.unlink(file, done))
    })
})
