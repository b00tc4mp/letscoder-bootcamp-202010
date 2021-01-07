require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomNonString, randomId, randomNotId, randomEmptyOrBlankString, randomWrongLengthId } = require('../utils/randoms')
require('../utils/array-polyfills')
const saveLive = require('./save-live')
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Live } = require('../models')
// const {ContentError, NotFoundError} = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveLive()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            role = ['ARTIST', 'PROMOTER'].random()

            const user = { fullname, email, password, role }

            return User.create(user)
                .then(user => userId = user.id)
        })
        describe('when user doesn\'t have lives', () => {
            let userId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomInteger(1, 1000)
                description = randomStringWithPrefix('description')
                artistId = (userId)
            })

            it('should succeed creating a new live', () => {
                return saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description)
                    .then(liveId => {

                        expect(ObjectId.isValid(liveId)).be.true

                        return Live.find({ promoterId: userId })
                    })
                    .then(lives => {
                        expect(lives).to.have.lengthOf(1)

                        const [live] = lives

                        expect(live.title).to.equal(title)
                        expect(live.liveDate).to.equal(liveDate)
                        expect(live.status).to.equal(status)
                        expect(live.duration).to.equal(duration)
                        expect(live.payment).to.equal(payment)
                        expect(live.descrption).to.equal(description)
                        expect(live.artistId).to.equal(artistId)

                        expect(live.date).to.be.instanceOf(Date)
                    })
            })
            afterEach(() => Live.deleteMany())
        })

        describe('when user already has lives', () => {
            let userId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')
                role = ['ARTIST', 'PROMOTER'].random()

                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomInteger(1, 1000)
                description = randomStringWithPrefix('description')
                artistId = (userId)

                const user = { fullname, email, password, role }

                return User.create(user)
                    .then(user => userId = user._id.toString())
                    .then(Live.create({ userId, artistId, title, liveDate, status, duration, payment, description })
                        .then(live => liveId = live._id.toString()))
            })

            it('should succeed updating live', () => {
                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = (userId)


                return saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description)
                    .then(liveId => {
                        expect(ObjectId.isValid(liveId)).be.true

                        return Live.findById({ _id: liveId })
                            .then(live => {
                                expect(live.title).to.equal(title)
                                expect(live.liveDate).to.equal(liveDate)
                                expect(live.status).to.equal(status)
                                expect(live.duration).to.equal(duration)
                                expect(live.payment).to.equal(payment)
                                expect(live.descrption).to.equal(description)
                                expect(live.artistId).to.equal(artistId)

                                expect(live.date).to.be.instanceOf(Date)
                            })
                    })
            })
        })

        describe('when user`s live does not exist (it was removed from db)', () => {
            let userId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                liveId = randomId()
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = (userId)
            })

            it('should fail on trying to update a live that does not exist any more', () => {
                return saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`live with id ${liveId} not found`)
                    })
            })

            afterEach(() => Live.deleteMany())
        })
        describe('when user does not exist', () => {
            let userId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                userId = randomId()
                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = (userId)
            })

            it('should fail alerting user with message: "promoter with id not found"', () => {
                return saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`promoter with id ${userId} not found`)
                    })
            })
        })

        afterEach(() => User.deleteMany())
    })


    describe('when any parameter is wrong', () => {
        describe('when title is wrong', () => {
            describe('when title is not a string', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomNonString()
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on a non string title', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${title} is not a title`)
                })
            })

            describe('when title is empty or blank', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomEmptyOrBlankString()
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on an empty or blank title', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, 'title is empty or blank')
                })
            })
        })

        describe('when description is wrong', () => {
            describe('when description is not a string', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('title')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomNonString()
                    artistId = randomId()
                })

                it('should fail on a non string description', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${description} is not a description`)
                })
            })

            describe('when description is empty or blank', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('title')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomEmptyOrBlankString()
                    artistId = randomId()
                    
                })

                it('should fail on non-string description', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, 'description is empty or blank')
                })
            })
        })

        describe('when duration is wrong', () => {
            describe('when duration is not a string', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('title')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomNonString()
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on a non string description', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${duration} is not a duration`)
                })
            })

            describe('when description is empty or blank', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('title')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomEmptyOrBlankString()
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                    
                })

                it('should fail on non-string description', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, 'duration is empty or blank')
                })
            })
        })

        describe('when status is wrong', () => {
            describe('when status is not a string', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = randomNonString()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on a non string status', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${status} is not a status`)
                })
            })

            describe('when status is empty or blank', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = randomEmptyOrBlankString()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on an empty or blank status', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, 'status is empty or blank')
                })
            })
        })

        describe('when payment is wrong', () => {
            
            describe('when payment is not a string', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomNonString()
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on a non string payment', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${payment} is not a payment`)
                })
            })

            describe('when payment is empty or blank', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomEmptyOrBlankString()
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on an empty or blank budget', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, 'payment is empty or blank')
                })
            })
        })
    })

    describe('when all Ids are wrong', () => {
        describe('when Id is not a valid Id', () => {
            describe('when userId is not an Id', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomNotId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail when userId is not an id', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${userId} is not an id`)
                })
            })

            describe('when artistId is not an Id', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomNotId()
                })

                it('should fail when artistId is not an id', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${artistId} is not an id`)
                })
            })
            describe('when liveId is not an Id', () => {
                let userId, artistId, liveId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveId = randomNotId()
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail when liveId is not an id', () => {
                    expect(() => saveLive(userId, artistId, liveId, title, liveDate, status, duration, payment, description, () => { })).to.throw(TypeError, `${liveId} is not an id`)
                })
            })
        })

        describe('when Id length is wrong', () => {
            describe('when userId has an invalid length', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomWrongLengthId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomId()
                })

                it('should fail on a non valid gameId length', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, `id length ${userId.length} is not 24`)
                })
            })

            describe('when artistId has an invalid length', () => {
                let userId, artistId, title, liveDate, status, duration, payment, description

                beforeEach(() => {
                    userId = randomId()
                    title = randomStringWithPrefix('text')
                    liveDate = randomStringWithPrefix('liveDate')
                    status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                    duration = randomStringWithPrefix('duration')
                    payment = randomStringWithPrefix('1')
                    description = randomStringWithPrefix('description')
                    artistId = randomWrongLengthId()
                })

                it('should fail on a non valid artistId length', () => {
                    expect(() => saveLive(userId, artistId, undefined, title, liveDate, status, duration, payment, description, () => { })).to.throw(Error, `id length ${artistId.length} is not 24`)
                })
            })
        })
    })
    after(mongoose.disconnect)
})  