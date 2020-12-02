require('dotenv').config()
const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const context = require('./context')
const saveNote = require('./save-note')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('saveNote()', () => {
    let client, db, users, notes

    before(done => {
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client
        .connect()
        .then(connection => {
            context.connection = connection

            db = connection.db(DB_NAME)

            users = db.collection('users')

            notes = db.collection('notes')

        })
    })
    describe('when user already exists', () => {
        let fullname, email, password, ownerId

        beforeEach(done => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                ownerId = result.insertedId.toString()

                done()
            })
        })

        describe('when user doesn\'t have notes', () => {
            let text, tags, visibility

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()
            })

            it('should succeed creating a new note', done => {
                saveNote(ownerId, undefined, text, tags, visibility, error => {
                    expect(error).to.be.null

                    notes.find({ owner: ObjectId(ownerId) }, (error, cursor) => {
                        if (error) return done(error)

                        cursor.toArray((error, notes) => {
                            if (error) return done(error)

                            expect(notes).to.have.lengthOf(1)

                            const [note] = notes

                            expect(note.text).to.equal(text)

                            expect(note.tags).to.deep.equal(tags)
                            expect(note.visibility).to.equal(visibility)
                            expect(note.date).to.be.instanceOf(Date)

                            done()
                        })
                    })
                })
            })
        })

        afterEach(done =>
            notes.deleteMany({ owner: ObjectId(ownerId) }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })

    describe('when user already has notes', () => {
        let text, tags, visibility, noteId

        beforeEach(done => {
            text = randomStringWithPrefix('text')
            tags = new Array(randomInteger(10, 100))

            for (let i = 0; i < tags.length; i++)
            tags[i] = randomStringWithPrefix('tag')

        visibility = ['public', 'private'].random()

        notes.insertOne({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date }, (error, result) => {
                    if (error) return done(error)

                    noteId = result.insertedId.toString()

                    done()
                })
            })
     
            it('should succeed updating the note', done => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))


                for (let i = 0; i < tags.length; i++)
                tags[i] = randomStringWithPrefix('tag')

            visibility = ['public', 'private'].random()

            saveNote(ownerId, noteId, text, tags, visibility, error => {
                expect(error).to.be.null

                notes.find({ owner: ObjectId(ownerId) }, (error, cursor) => {
                    if (error) return done(error)

                    cursor.toArray((error, notes) => {
                        if (error) return done(error)

                        expect(notes).to.have.lengthOf(1)

                        const [note] = notes

                        expect(note.text).to.equal(text)

                        expect(note.tags).to.deep.equal(tags)
                        expect(note.visibility).to.equal(visibility)
                        expect(note.date).to.be.instanceOf(Date)

                        done()
                    })
                })
            })
        })

        afterEach(done =>
            notes.deleteMany({ owner: ObjectId(ownerId) }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })

    describe('when user note does not exist (it was removed from db)', () => {
        let text, tags, visibility, noteId

        beforeEach(() => {
            noteId = '5fbcd46c1cc24f9c7ce22db0'

            text = randomStringWithPrefix('text')
            tags = new Array(randomInteger(10, 100))

            for (let i = 0; i < tags.length; i++)
                tags[i] = randomStringWithPrefix('tag')

            visibility = ['public', 'private'].random()
        })

        it('should fail on trying to update a note that does not exist any more', done => {
            saveNote(ownerId, noteId, text, tags, visibility, error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`note with id ${noteId} not found`)

                done()
                })
            })
        })

        afterEach(done =>
            users.deleteOne({ email, password }, (error, result) => {
                if (error) return done(error)
                expect(result.deletedCount).to.equal(1)
                done()
            })
        )

    describe('when user does not exist', () => {
        let text, tags, visibility, ownerId

        beforeEach(() => {
            ownerId = '5fbcd46c1cc24f9c7ce22db1'

            text = randomStringWithPrefix('text')
            tags = new Array(randomInteger(10, 100))

            for (let i = 0; i < tags.length; i++)
                tags[i] = randomStringWithPrefix('tag')

            visibility = ['public', 'private'].random()
        })

        it('should fail alerting user with id does not exist', done => {
            saveNote(ownerId, undefined, text, tags, visibility, error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${ownerId} not found`)

                done()
            })
        })
    })

    // TODO more unit test cases

    after(done => client.close(error => {
        if (error) return done(error)
        done()
    }))
})