const { expect } = require("chai");
const retrieveUser = require('./retrieve-user')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('../utils/randoms')
const fs = require('fs')
const { createId } = require('../utils/ids')

describe('SPEC retrieveUser()', () => {
    describe('when user exists', () => {
        let id, fullname, email, password, repassword, file, user, json
        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')}${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password

            file = `./data/users/${id}.json`

            user = { id, fullname, email, password }

            json = JSON.stringify(user)

            fs.writeFile(`./data/users/${id}.json`, json, error => {
                expect(error).to.be.null

                done()
            })
            
        })

        it('should succed on extisting user', done => {
            retrieveUser(id, (error, user) => {
                expect(error).to.be.null

                const { id: _id, email: _email, fullname: _fullname } = user

                expect(id).to.be.a('string')
                expect(id).to.equal(_id)
                // expect(id === _id).to.be.true
                expect(email).to.be.a('string')
                expect(email).to.equal(_email)
                expect(fullname).to.be.a('string')
                expect(fullname).to.equal(_fullname)
                expect(user.password).to.not.exist

                done()
            })
        })
        afterEach(done => {
            fs.unlink(file, done)
        })
    })
    describe('when user does not exist', () => {
        let id 
        beforeEach(() => {
            id = createId()
        })
        it('should fail on non matching id', done => {
            retrieveUser(id, (error, user) => {
                expect(error).to.exist
                debugger
                expect(error.message).to.have.length.greaterThan(0)
                expect(user).to.be.undefined
                done()
            })
        })
    })
    describe('when any parameter is wrong', () => {
        describe('on non string id', () => {
            beforeEach(() => {
                
            })
        })
        describe('on empty or blank id', () => {

        })
        describe('on invalid id', () => {

        })
        describe('on non function callback', () => {

        })
        
    })
})
