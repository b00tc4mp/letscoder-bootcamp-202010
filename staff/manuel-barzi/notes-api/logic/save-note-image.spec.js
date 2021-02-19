require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('notes-utils/randoms')
require('notes-utils/array-polyfills')
const saveNoteImage = require('./save-note-image')
const { mongoose, mongoose: { Types: { ObjectId } }, models: { User, Note } } = require('notes-data')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const { NotFoundError } = require('notes-errors')


const { env: { MONGODB_URL } } = process

describe('saveNoteImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    let noteImage

    beforeEach(() => noteImage = fs.createReadStream(path.join(__dirname, '../data/notes/default.jpg')))

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

                return Note.create({ text, tags, visibility, owner: ownerId, date: new Date })
                    .then(note => noteId = note.id)
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