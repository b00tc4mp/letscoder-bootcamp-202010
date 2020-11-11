const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const path = require('path')
const fs = require('fs')
const { createId } = require('../utils/ids') 
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')

describe('retrieveUser()', () => {
    describe('when user already exists', () => {
        let id, fullname, email, password, file;

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user) // converts 'user' object to JSON

            file = `../data/users/${id}.json` // file path definition

            fs.writeFile(path.join(__dirname, file), json, done)
        })
        it('should succeed on right id', done => {
            retrieveUser(id, (error, json) => {
                expect(error).to.be.null
                expect(id).to.be.a('string')

                expect(json).to.be.an('object')

                done()
            })
        })

        describe('', done => {

        })
    })
})
