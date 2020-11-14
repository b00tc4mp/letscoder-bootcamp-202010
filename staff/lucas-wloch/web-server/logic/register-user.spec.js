const { expect } = require('chai')
const registerUser = require('./register-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('../utils/randoms')
const fs = require('fs')

describe('SPEC registerUser()', () => {
    describe('when user does not exist', () => {
        let fullname, email, password, repassword, file

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')}${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            repassword = password

            done()
        })
        
        it('shoud succed on new user', done => {
            registerUser(fullname, email, password, repassword, (error,id) => {
                expect(error).to.be.null
                file = `./data/users/${id}.json`

                fs.readFile(file, 'utf8', (error, json) => {
                    expect(error).to.be.null

                    const { id: _id, email: _email, password: _password, fullname: _fullname } = JSON.parse(json)

                    expect(id).to.be.a('string')
                    // expect(id === _id).to.be.true
                    expect(email).to.be.a('string')
                    expect(email).to.equal(_email)
                    expect(fullname).to.be.a('string')
                    expect(fullname).to.equal(_fullname)
                    expect(password).to.be.a('string')
                    expect(password).to.equal(_password)


                    done()
                })
            })
        })

        afterEach(done => {
            fs.unlink(file, done)
        })

    })

    describe('when user already exists', () => {
        let fullname, email, password, repassword, file, user, json

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

                fs.readFile(file, 'utf8', (error, json) => {
                    expect(error).to.be.null

                    const { id: _id, email: _email, password: _password, fullname: _fullname } = JSON.parse(json)

                    expect(id).to.be.a('string')
                    expect(id).to.equal(_id)
                    // expect(id === _id).to.be.true
                    expect(email).to.be.a('string')
                    expect(email).to.equal(_email)
                    expect(fullname).to.be.a('string')
                    expect(fullname).to.equal(_fullname)
                    expect(password).to.be.a('string')
                    expect(password).to.equal(_password)


                    done()
                })
            })
            
        })

        it('should fail on existing user', done => {
            registerUser(fullname, email, password, repassword, error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.have.length.greaterThan(0)
                done()
            })
        })

        afterEach(done => {
            fs.unlink(file, done)
        })
    })

    // describe('when any parameter is wrong', () => {
    //     beforeEach()

    //     it('should fail on validation')

    //     afterEach()
    // })
})
