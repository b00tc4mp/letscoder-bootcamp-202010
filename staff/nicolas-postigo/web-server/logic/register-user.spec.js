const { expect } = require('chai')
const registerUser = require('./register-user.js')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const fs = require('fs')


describe('registerUser()', () => {
    describe('when user already exists', () => {
        let id, fullname, email, password, file

        beforeEach(done => {
            let id = createId()
            let fullname = 'Juanito'
            let email = 'juanito@mail.com'
            let password = 'juanito'

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user)

            file = `./data/users/${id}.json`

            fs.writeFile(file, json, done)
        })

        it('should succed on new user credentials', done => {
            registerUser(email, password, (error) => {
                expect(error).to.be.null

            })

        })
    })
})