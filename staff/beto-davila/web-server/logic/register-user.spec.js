const { expect } = require('chai')
const registerUser = require('./register-user')
const { createId } = require('../utils/ids')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('../utils/randoms')
const fs = require('fs')
const path = require('path')

describe('SPEC registerUser()', () => {
    describe('when user does not exist', () => {
        let id, fullname, email, password, file

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            file = `/Users/betodav/Bootcamp/collab/letscoder-bootcamp-202010/staff/beto-davila/web-server/data/users/${id}.json`

            done()

        })

        it('should succed on new user', done => {
            registerUser(fullname, email, password, error => {
                expect(error).to.be.null

                fs.readFile(file, 'utf8', (error, json) => {
                    expect(error).to.be.null

                    const {fullname: _fullname, email: _email, password: _password} = JSON.parse(json)

                    expect(fullname).to.be.a('string')
                    expect(fullname).to.equal(_fullname)
                    expect(email).to.be.a('string')
                    expect(email).to.equal(_email)
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
        let id, fullname, email, password, file, user, json

        beforeEach(done => {
            id = createId()
            fullname = `${randomStringWithPrefix('name')}${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
    
            file = `/Users/betodav/Bootcamp/collab/letscoder-bootcamp-202010/staff/beto-davila/web-server/data/users/${id}.json`

            user = { id, fullname, email, password }

            json = JSON.stringify(user)

            fs.writeFile(file, json, error => {
                expect(error).to.be.null

                fs.readFile(file, 'utf8', (error, json) => {
                    expect(error).to.be.null

                    const { id: _id, email: _email, password: _password, fullname: _fullname } = JSON.parse(json)

                    expect(id).to.be.a('string')
                    expect(id).to.equal(_id)
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
            registerUser(fullname, email, password, error => {
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

    //   describe('when any parameter is wrong', () => {
    //     beforeEach()


    //     it('should fail on validation')

    //     afterEach()


    //})


}) 