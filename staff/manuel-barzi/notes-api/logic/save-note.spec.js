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

        client.connect((error, connection) => {
            if (error) return done(error)

            context.connection = connection

            db = connection.db(DB_NAME)

            users = db.collection('users')

            notes = db.collection('notes')

            done()
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

                            done()
                        })
                    })
                })
            })
        })

        afterEach(done =>
            users.deleteOne({ email, password }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                notes.deleteMany({ owner: ObjectId(ownerId) }, (error, result) => {
                    if (error) return done(error)

                    expect(result.deletedCount).to.equal(1)

                    done()
                })
            })
        )
    })

    describe('when user does not exist', () => {
        let fullname, email, password

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
        })

        // it('should succeed on new user', done => {
        //     registerUser(fullname, email, password, error => {
        //         expect(error).to.be.null

        //         users.findOne({ email, password }, (error, user) => {
        //             expect(error).to.be.null

        //             expect(user).to.exist
        //             expect(user.fullname).to.equal(fullname)

        //             done()
        //         })
        //     })
        // })

        afterEach(done =>
            users.deleteOne({ email, password }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                done()
            })
        )
    })

    // TODO more unit test cases

    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))
})