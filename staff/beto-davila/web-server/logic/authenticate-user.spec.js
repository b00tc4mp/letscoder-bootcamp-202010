const { expect } = require('chai') // var expect = chai.expect;
const authenticateUser = require('./authenticate-user')
const { createId } = require('../utils/ids') 
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const fs = require('fs')
const path = require('path')

describe('SPEC authenticateUser()', () => {
    describe('when user already exists', () => {
        let id, fullname, email, password, file;

        // preparing scenario for auth
        beforeEach(done => {

            // generating variables with the functions from 'utils'
            id = createId()
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { id, fullname, email, password }

            const json = JSON.stringify(user) // converts 'user' object to JSON

            file = `../data/users/${id}.json` // file path definition

            fs.writeFile(path.join(__dirname, file), json, done) // file creation (path, content, done)
        })

        it('should succeed on correct credentials', done => {
            
            authenticateUser(email, password, (error, userId) => {
                expect(error).to.be.null

                expect(userId).to.be.a('string')
                expect(userId).to.have.length.greaterThan(0)

                done()
            })
        })

        describe('when wrong credentials', () => {
            it('should fail on wrong e-mail', done => {
                authenticateUser(`wrong${email}`, password, (error, userId) => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal('wrong credentials')

                    expect(userId).to.be.undefined

                    done()
                })
            })

            it('should fail on wrong password', done => {
                authenticateUser(email, `wrong${password}`, (error, userId) => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal('wrong credentials')

                    expect(userId).to.be.undefined

                    done()
                })
            })
        })

        afterEach(done => fs.unlink(path.join(__dirname, file), done))
    })

    describe('when user does not exist', () => {
        let email, password

        beforeEach(() => {
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        it('should fail on valid credentials', done => {
            authenticateUser(email, password, (error, userId) => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('wrong credentials')

                expect(userId).to.be.undefined

                done()
            })
        })
    })

    describe('when any parameter is wrong', () => {
        describe('when e-mail is wrong', () => {
            describe('when e-mail is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on empty or blank email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when e-mail is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on non-string email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(Error, 'e-mail is empty or blank')
                })
            })
            describe('when e-email is not valid', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '-mail.com')
                    password = randomStringWithPrefix('password')
                })

                it('should fail on non-valid email', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(Error, `invalid e-mail`)
                })
            })
            })
        })
        describe('when password is wrong', () => {
            describe('when password is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
            })
            it ('should fail on empty or blank password', () => {
                expect(() => authenticateUser(email, password, () => {})).to.throw(Error, 'password is empty or blank')
            })

        })
            describe('when password is a non-string password', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })
                it('should fail on non-string password', () => {
                    expect(() => authenticateUser(email, password, () => {})).to.throw(TypeError, `${password} is not a password`)
                })
            })

        describe('when callback is wrong', () => {
            describe('when callback is not a function', () => {
                let email, password, callback

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomStringWithPrefix('password')
                    callback = [1, true, null, undefined, {}, [], new Date].random()
                })
                it('should fail on a non-valid callback', () => {
                    expect(()=> authenticateUser(email, password, callback)).to.throw(TypeError, `${callback} is not a callback`)
                        
                })
            })

        })
    })
})