require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomNotId, randomId } = require('../utils/randoms')
const retrieveLives = require('./retrieve-lives')
const mongoose = require('mongoose')
const { User, Live } = require('../models')
// const { LengthError, ContentError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrieveLives()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists with promoter role', () => {
        let fullname, email, password, userId, live

        beforeEach(() => {
            fullname = randomStringWithPrefix('name')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            role = 'PROMOTER'

            title = randomStringWithPrefix('title')
            liveDate = randomStringWithPrefix('liveDate')
            status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
            duration = randomStringWithPrefix('duration')
            payment = randomStringWithPrefix('1')
            description = randomStringWithPrefix('description')
            artistId = userId

            const user = { fullname, email, password, role }

            return User.create(user)
                .then(user => userId = user._id.toString())
                .then(Live.create({ userId, artistId, title, liveDate, status, duration, payment, description })
                    .then(live => liveId = live._id.toString()))
        })
        it('should succeed on correct user id', () =>
            retrieveLives(userId)
                .then(live => {
                    expect(live).to.exist
                    
                })
        )

        describe('when user already exists with Artist role', () => {
            let fullname, email, password, userId, live
    
            beforeEach(() => {
                fullname = randomStringWithPrefix('name')
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')
                role = 'ARTIST'
    
                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = userId
    
                const user = { fullname, email, password, role }
    
                return User.create(user)
                    .then(user => userId = user._id.toString())
                    .then(Live.create({ userId, artistId, title, liveDate, status, duration, payment, description })
                        .then(live => liveId = live._id.toString()))
            })
            it('should succeed on correct user id', () =>
                retrieveLives(userId)
                    .then(live => {
                        expect(live).to.exist
                        
                    })
            )

                })

        describe('when user id is wrong', () => {
            
            beforeEach(() => userId = randomId())

            it('should fail on wrong user id', () =>
                retrieveLives(userId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`Cannot read property 'role' of null`)
                    })
            )
        })

        afterEach(() =>
             User.deleteMany().then(() => { Live.deleteMany().then(() => { }) })
         )
    })

    describe('when user id is wrong', () => {
        describe('when user id is not a string', () => {
            let _userId

            beforeEach(() => _userId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string user id', () => {
                expect(() => retrieveLives(_userId, () => { })).to.throw(TypeError, `${_userId} is not an id`)
            })
        })

        describe('when user id is empty or blank', () => {
            let _userId

            beforeEach(() => _userId = randomEmptyOrBlankString())

            it('should fail on empty or blank user id', () => {
                expect(() => retrieveLives(_userId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when user id length is not 24', () => {
            let userId

            beforeEach(() => userId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : 3)))

            it('should fail on user id length different from 24', () => {
                expect(() => retrieveLives(userId, () => { })).to.throw(Error, `id length ${userId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})  