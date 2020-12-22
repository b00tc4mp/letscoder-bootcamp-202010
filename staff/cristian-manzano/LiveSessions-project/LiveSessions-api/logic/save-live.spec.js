require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const saveLive = require('./save-live')
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Live } = require('../models')
const {ContentError, NotFoundError} = require('../errors')
const user = require('../models/schemas/user')

const { env: { MONGODB_URL } } = process

describe('saveLive()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user doesn\'t have lives', () => {
            let ownerId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                // promoterId = '5fbcd46c1cc24f9c7ce22db1'
                title = randomStringWithPrefix('text')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = ('5fe0c2f7dae374f05d17b762')
            })

            it('should succeed creating a new live', () =>
                saveLive({promoter: ownerId}, artistId, undefined, title, liveDate, status, duration, payment, description)
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
            )

            afterEach(() => Live.deleteMany({promoterId}))
        })

        describe('when user already has lives', () => {
            let promoterId, artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {
                // promoterId = '5fbcd46c1cc24f9c7ce22db1'
                title = randomStringWithPrefix('text')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = ('5fe0c2f7dae374f05d17b762')

                return Live.create({ promoterId: ObjectId(promoterId), artistId: ObjectId(artistId), title, liveDate, status, duration, payment, description, date: new Date(), })
                    .then(live => liveId = live._id)
            })

            it('should succeed updating the live', () => {
                // promoterId = '5fbcd46c1cc24f9c7ce22db1'
                title = randomStringWithPrefix('text')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = ('5fe0c2f7dae374f05d17b762')

                return saveLive(promoterId, artistId, liveId, title, liveDate, status, duration, payment, description)
                    .then(liveId => {
                        expect(ObjectId.isValid(liveId)).be.true

                        return Live.find({ _id: liveId })
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

        describe('when user live does not exist (it was removed from db)', () => {
            let promoterId, artistId, title, liveDate, status, duration, payment, description, liveId

            beforeEach(() => {
                // promoterId = '5fbcd46c1cc24f9c7ce22db1'
                liveId = '5fbcd46c1cc24f9c7ce22db0'

                title = randomStringWithPrefix('text')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = ('5fe0c2f7dae374f05d17b762')
            })

            it('should fail on trying to update a live that does not exist any more', () =>
                saveLive(promoterId, artistId, liveId, title, liveDate, status, duration, payment, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`live with id ${liveId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })

    describe('when user does not exist', () => {
        let promoterId, artistId, title, liveDate, status, duration, payment, description

        beforeEach(() => {
            

                title = randomStringWithPrefix('text')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = ('5fe0c2f7dae374f05d17b762')
        })

        it('should fail alerting user with id does not exist', () =>
            saveLive(promoterId, artistId, undefined, title, liveDate, status, duration, payment, description)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${promoterId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})