require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')

const saveUserImage = require('./save-user-image')
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Live } = require('../models')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const live = require('../models/schemas/live')

// const { NotFoundError } = require('users-errors')


const { env: { MONGODB_URL } } = process

describe('saveUserImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    let userImage

    beforeEach(() => userImage = fs.createReadStream(path.join(__dirname, '../data/users/default-profile-image.png')))

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

            it('should succeed saving the live image', () =>
                saveUserImage(userId, userImage)
                    .then(result => {
                        expect(result).to.be.undefined

                        return fsp.access(path.join(__dirname, `../data/users/${userId}.jpg`), fs.F_OK)
                    })
            )

            afterEach(() => Promise.all([
                User.deleteMany(),
                fsp.unlink(path.join(__dirname, `../data/users/${userId}.jpg`))
            ]))
    })

    describe('when user does not exist', () => {
        let userId

        beforeEach(() => {
            userId = new ObjectId().toString()
        })

        it('should fail alerting user not found', () =>
            saveUserImage(userId, userImage)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})