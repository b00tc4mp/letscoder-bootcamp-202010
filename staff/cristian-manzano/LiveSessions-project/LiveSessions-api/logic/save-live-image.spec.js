require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')

const saveliveImage = require('./save-live-image')
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Live } = require('../models')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const live = require('../models/schemas/live')

// const { NotFoundError } = require('lives-errors')


const { env: { MONGODB_URL } } = process

describe('saveliveImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    let liveImage

    beforeEach(() => liveImage = fs.createReadStream(path.join(__dirname, '../data/lives/default-profile-image.png')))

    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })

        describe('when user already has lives', () => {
            let artistId, title, liveDate, status, duration, payment, description

            beforeEach(() => {

                title = randomStringWithPrefix('title')
                liveDate = randomStringWithPrefix('liveDate')
                status = ['ACCEPTED', 'DENIED', 'PENDING'].random()
                duration = randomStringWithPrefix('duration')
                payment = randomStringWithPrefix('1')
                description = randomStringWithPrefix('description')
                artistId = userId

                return Live.create({ userId, artistId, title, liveDate, status, duration, payment, description })
                    .then(live => liveId = live.id)
            })

            it('should succeed saving the live image', () =>
                saveliveImage(liveId, liveImage)
                    .then(result => {
                        expect(result).to.be.undefined

                        return fsp.access(path.join(__dirname, `../data/lives/${liveId}.jpg`), fs.F_OK)
                    })
            )

            afterEach(() => Promise.all([
                Live.deleteMany(),
                fsp.unlink(path.join(__dirname, `../data/lives/${liveId}.jpg`))
            ]))
        })

        describe('when live does not exist', () => {
            let liveId

            beforeEach(() => {
                liveId = new ObjectId().toString()
            })

            it('should fail alerting live not found', () =>
                saveliveImage(liveId, liveImage)
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)

                        expect(error.message).to.equal(`live with id ${liveId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })

    describe('when user does not exist', () => {
        let userId, liveId

        beforeEach(() => {
            userId = new ObjectId().toString()
            liveId = new ObjectId().toString()
        })

        it('should fail alerting user not found', () =>
            saveliveImage(liveId, liveImage)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})