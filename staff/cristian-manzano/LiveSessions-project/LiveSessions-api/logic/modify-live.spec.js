require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomNotId, randomWrongLengthId } = require('../utils/randoms')
const modifyLive = require('./modify-live')
const mongoose = require('mongoose')
const { User, Live } = require('../models')

const { env: { MONGODB_URL } } = process

describe('modifyLive()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when live already exists', () => {
        let liveId

        beforeEach(() => {

            userId = randomId()
            title = randomStringWithPrefix('title')
            liveDate = randomStringWithPrefix('liveDate')
            status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
            duration = randomStringWithPrefix('duration')
            payment = randomStringWithPrefix('1')
            description = randomStringWithPrefix('description')
            artistId = randomId()



            return Live.create({ userId, artistId, title, liveDate, status, duration, payment, description })
                .then(live => liveId = live._id.toString())
        })

        it('should succeed on correct live id', () => {

            let title, liveDate, status, duration, payment, description

            title = randomStringWithPrefix('title')
            liveDate = randomStringWithPrefix('liveDate')
            status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
            duration = randomStringWithPrefix('duration')
            payment = randomStringWithPrefix('1')
            description = randomStringWithPrefix('description')


            return modifyLive(liveId, title, liveDate, duration, status, payment, description)
                .then(() => {
                    return Live.findOne({ _id: liveId }).lean()
                        .then(live => {
                            Live.updateOne({ _id: liveId }, { $set: { title, liveDate, duration, status, payment, description } })
                                .then(result => '')

                                .then(lives => {
                                    expect(lives).to.have.lengthOf(1)

                                    const [live] = lives

                                    expect(live.title).to.equal(title)
                                    expect(live.liveDate).to.equal(liveDate)
                                    expect(live.status).to.equal(status)
                                    expect(live.duration).to.equal(duration)
                                    expect(live.payment).to.equal(payment)
                                    // expect(live.descrption).to.equal(description)
                                    expect(live.artistId.toString()).to.equal(artistId)

                                    expect(live.date).to.be.instanceOf(Date)
                                })
                        })
                })
        })
    })

    describe('when live id is not found', () => {
        let title, liveDate, status, duration, payment, description, liveId

        beforeEach(() => {

            liveId = randomId()
            title = randomStringWithPrefix('title')
            liveDate = randomStringWithPrefix('liveDate')
            status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
            duration = randomStringWithPrefix('duration')
            payment = randomStringWithPrefix('1')
            description = randomStringWithPrefix('description')

        })

        it('should fail on wrong live id', () => {
            return modifyLive(liveId, title, liveDate, duration, status, payment, description)
                .then(() => {
                    Live
                        .findOne({ _id: liveId }).lean()
                        .catch(error => {
                            expect(error).to.be.instanceOf(Error)

                            expect(error.message).to.equal(`live with id ${liveId} does not exists`)
                        })
                })
        })
        // TODO 
        describe('when any parameter is wrong', () => {
            describe('when title is wrong', () => {
                describe('when title is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomNonString()
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong title', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${title} is not a title`)
                    })
                })

                describe('when title is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomEmptyOrBlankString()
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong title', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'title is empty or blank')

                    })

                })
            })

            describe('when liveDate is wrong', () => {
                describe('when liveDate is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomNonString()
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong liveDate', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${liveDate} is not a liveDate`)

                    })

                })
                describe('when liveDate is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomEmptyOrBlankString()
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')
                    })

                    it('should fail on wrong liveDate', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'liveDate is empty or blank')
                    })
                })
            })

            describe('when status is wrong', () => {
                describe('when status is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = randomNonString()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong liveDate', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${status} is not a status`)

                    })

                })
                describe('when status is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = randomEmptyOrBlankString()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')
                    })

                    it('should fail on wrong liveDate', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'status is empty or blank')
                    })
                })
            })

            describe('when duration is wrong', () => {
                describe('when duration is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomNonString()
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong duration', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${duration} is not a duration`)

                    })

                })
                describe('when duration is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomEmptyOrBlankString()
                        payment = randomStringWithPrefix('1')
                        description = randomStringWithPrefix('description')
                    })

                    it('should fail on wrong liveDate', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'duration is empty or blank')
                    })
                })
            })

            describe('when payment is wrong', () => {
                describe('when payment is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomNonString()
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong payment', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${payment} is not a payment`)

                    })

                })
                describe('when payment is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomEmptyOrBlankString()
                        description = randomStringWithPrefix('description')
                    })

                    it('should fail on wrong payment', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'payment is empty or blank')
                    })
                })
            })

            describe('when description is wrong', () => {
                describe('when description is not a string', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('payment')
                        description = randomNonString()

                    })

                    it('should fail on wrong description', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${description} is not a description`)

                    })

                })
                describe('when description is empty or blank', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('payment')
                        description = randomEmptyOrBlankString()
                    })

                    it('should fail on wrong duration', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, 'description is empty or blank')
                    })
                })
            })

            describe('when liveId is wrong', () => {
                describe('when liveId is not a valid Id', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomNotId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('payment')
                        description = randomStringWithPrefix('description')

                    })

                    it('should fail on wrong liveId', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(TypeError, `${liveId} is not an id`)

                    })

                })
                describe('when liveId has an invalid length', () => {

                    let title, liveDate, status, duration, payment, description, liveId

                    beforeEach(() => {

                        liveId = randomWrongLengthId()
                        title = randomStringWithPrefix('title')
                        liveDate = randomStringWithPrefix('liveDate')
                        status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                        duration = randomStringWithPrefix('duration')
                        payment = randomStringWithPrefix('payment')
                        description = randomStringWithPrefix('description')
                    })

                    it('should fail on wrong length', () => {
                        expect(() => modifyLive(liveId, title, liveDate, duration, status, payment, description, () => { })).to.throw(Error, `id length ${liveId.length} is not 24`)
                    })
                })
            })
        })

        afterEach(() =>
            Live.deleteMany().then(() => { })
        )
    })

    after(mongoose.disconnect)
})