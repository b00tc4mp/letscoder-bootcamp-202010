require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')


const saveNote = require('./save-note')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')

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

    describe('on existing user', () => {
        let fullname, email, password, text, tag1, tag2, visibility, tags, note, user, userId, noteId

        beforeEach(done => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            user = { fullname, email, password }

            text = randomStringWithPrefix(text)
            tag1 = randomStringWithPrefix(tag1)
            tag2 = randomStringWithPrefix(tag2)
            visibility = 'public'
            tags = [tag1, tag2]

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()
                done()
            })
        })

        it('shoud succed on new note', done => {
            saveNote(userId, undefined, text, tags,  visibility, error => {
                // saveNote( undefined, 'Desinstalar Mongo YA!',['mongo', 'uninstall', 'arbolada'],"5fba62c39633f535c432b630", 'private', error =>{
                expect(error).to.be.null

                notes.findOne({ text, visibility, tags }, (error, _note) => {
                    expect(error).to.be.null

                    noteId = _note._id
                    expect(_note).to.exist
                    expect(_note.text).to.equal(text)
                    expect(_note.visibility).to.equal(visibility)

                    for (var i = 0; i < _note.tags.length; i++) {
                        expect(_note.tags[i]).to.equal(tags[i])
                    }

                    done()
                })
            })
        })


        afterEach(done =>
            users.deleteOne({ fullname, email }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                notes.deleteOne({ text }, (error, result) => {
                    if (error) return done(error)

                    expect(result.deletedCount).to.equal(1)

                    done()
                })

            })

        )

    })
    //TODO
    describe('on existing note', () => {
        let fullname, email, password, text, tag1, tag2, visibility, tags, note, user, userId, noteId

        beforeEach(done => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            user = { fullname, email, password }

            text = randomStringWithPrefix(text)
            tag1 = randomStringWithPrefix(tag1)
            visibility = ['public', 'private'].random()
            tags = [tag1]

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()

                note = { text, tags, visibility, owner: userId }

                notes.insertOne(note, (error, result) => {
                    if (error) return done(error)

                    noteId = result.insertedId.toString()

                    done()
                })

            })

        })
        it('shoud succed on existing note', done => {

            saveNote(userId, noteId, text, tags,  visibility, error => {
                expect(error).to.be.null

                notes.findOne({ text, visibility, tags }, (error, _note) => {
                    expect(error).to.be.null

                    expect(_note).to.exist
                    expect(_note.text).to.equal(text)
                    expect(_note.visibility).to.equal(visibility)

                    for (var i = 0; i < _note.tags.length; i++) {
                        expect(_note.tags[i]).to.equal(tags[i])
                    }

                    done()
                })
            })
        })

        afterEach(done =>
            users.deleteOne({ fullname, email }, (error, result) => {
                if (error) return done(error)

                expect(result.deletedCount).to.equal(1)

                // notes.deleteOne({ text }, (error, result) => {
                //     if (error) return done(error)

                //     expect(result.deletedCount).to.equal(1)

                done()
                // })

            })

        )
    })

    after(done => client.close(error => {
        if (error) return done(error)

        done()
    }))
}) 