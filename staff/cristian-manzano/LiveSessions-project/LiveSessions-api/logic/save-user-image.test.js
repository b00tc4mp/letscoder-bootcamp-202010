require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomNonString, randomId, randomNotId, randomEmptyOrBlankString, randomWrongLengthId } = require('../utils/randoms')
require('../utils/array-polyfills')
const mongoose = require('mongoose')
const { Types: { ObjectId } } = mongoose
const { User, Live } = require('../models')
const saveUserImage = require('./save-user-image')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')

const { env: { MONGODB_URL } } = process

describe('saveUserImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    let userImage

    beforeEach(() => userImage = fs.createReadStream(path.join(__dirname, '../data/users/default-profile-image.png')))

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

        describe('when user already has notes', () => {
            let text, tags, visibility, noteId

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()

                return User.create({ text, tags, visibility, owner: ownerId, date: new Date })
                    .then(user => userId = user._id)
            })

            it('should succeed saving the note image', () =>
                saveNoteImage(ownerId, noteId, noteImage)
                    .then(result => {
                        expect(result).to.be.undefined

                        return fsp.access(path.join(__dirname, `../data/notes/${noteId}.jpg`), fs.F_OK)
                    })
            )

            afterEach(() => Promise.all([
                Note.deleteMany(),
                fsp.unlink(path.join(__dirname, `../data/notes/${noteId}.jpg`))
            ]))
        })

        describe('when note does not exist', () => {
            let noteId

            beforeEach(() => {
                noteId = new ObjectId().toString()
            })

            it('should fail alerting note not found', () =>
                saveNoteImage(ownerId, noteId, noteImage)
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)

                        expect(error.message).to.equal(`note with id ${noteId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })

    describe('when user does not exist', () => {
        let ownerId, noteId

        beforeEach(() => {
            ownerId = new ObjectId().toString()
            noteId = new ObjectId().toString()
        })

        it('should fail alerting user not found', () =>
            saveNoteImage(ownerId, noteId, noteImage)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
})