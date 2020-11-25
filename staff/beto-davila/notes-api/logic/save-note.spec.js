require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const saveNote = require('./save-note')
const context = require('./context')
require('../utils/array-polyfills')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')

const { MONGODB_URL, DB_NAME } = process.env


describe('SPEC saveNote()', () => {
    let client, db, users, notes // globally initialitaze for each case

    before( () => {
        // Mongo client instance
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true})

        return client.connect()
                .then(connection => {
                    context.connection = connection
        
                    db = connection.db(DB_NAME)
        
                    // db's collections
                    users = db.collection('users')
                    notes = db.collection('notes')
                })
    })

    describe('when user exists already', () => {
        let fullname, email, password, ownerId

        // adding new user to mongo db 'users'
        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return users
                    .insertOne(user)
                    .then(result => {
                        // gets id after 'insertOne' in Mongo
                        ownerId = result.insertedId.toString()
                    })
        })

        describe('when user does not have notes', () => {
            let text, tags, visibility

            // initialize each needed parameter to save a new note 
            beforeEach(() => {
                text = randomStringWithPrefix('text')
                visibility = ['public', 'private'].random()
                tags = new Array(randomInteger(10, 50)) // creates empty array indexes from 10 to 50

                // populates each position in the array
                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')
            })

            it('should succeed on creating a new note', () => {
                saveNote(ownerId, undefined, text, tags, visibility)
                    .then(() => {
                        const cursor = notes.find({ owner: ObjectId(ownerId) })
    
                            return cursor.toArray()
                                .then(notes => {
                                    expect(notes).to.have.lengthOf(1)
        
                                    const [note] = notes
        
                                    expect(note.text).to.equal(text)
                                    expect(note.tags).to.deep.equal(tags) // 'deep' tells the value of the tag
                                    expect(note.visibility).to.equal(visibility)
                                    expect(note.date).to.be.instanceOf(Date)
                                })

                    })
            })

            afterEach(() => {
                notes
                    .deleteMany( { owner: ObjectId(ownerId) } )
                    .then( result => expect(result.deletedCount).to.equal(1) ) 
            })

        })
        describe('when user has notes already', () => {
            let text, tags, visibility, noteId

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                visibility = ['public', 'private'].random()
                tags = new Array(randomInteger(10, 50))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                    return notes.insertOne({ text, tags, visibility, owner: ObjectId(ownerId), date: new Date })
                        .then(result => noteId = result.insertedId.toString())
            })

            it('should succed updating the note', () => {
                text = randomStringWithPrefix('text')
                visibility = ['public', 'private'].random()
                tags = new Array(randomInteger(10, 50))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                saveNote(ownerId, noteId, text, tags, visibility)

                    const cursor = notes.find( {owner: ObjectId(ownerId)})

                    cursor.toArray()
                        .then(notes => {
                            expect(notes).to.have.lengthOf(1)

                            const [note] = notes

                            expect(note.text).to.equal(text)

                            expect(note.tags).to.deep.equal(tags)
                            expect(note.visibility).to.equal(visibility)
                            expect(note.date).to.be.instanceOf(Date)
                        })
            })

            afterEach(() => {
                notes
                    .deleteMany( {owner: ObjectId(ownerId)})
                    .then(result => expect(result.deletedCount).to.equal(1))
            })
        })

        describe('when note does not exist (deleted from db)', () => {
            let text, tags, visibility, noteId

            beforeEach(() => {
                noteId = '5fbcd46c1cc24f9c7ce22db0'

                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()
            })

            it('should fail on trying to update the non-existing note', () => {
                saveNote(ownerId, noteId, text, tags, visibility)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`note with id ${noteId} not found`)

                    })
            })

            afterEach(() => {
                users
                    .deleteOne({email, password})
                    .then(result =>{
                        expect(result.deletedCount).to.equal(1)
                    })
            })
        })
    })

        describe('when the user does not exist', () => {
            let text, tags, visibility, ownerId

        beforeEach(() => {
            ownerId = '5fbcd46c1ca24f9c7ce22db1'

            text = randomStringWithPrefix('text')
            tags = new Array(randomInteger(10, 50))

            for (let i = 0; i < tags.length; i++)
                tags[i] = randomStringWithPrefix('tag')

            visibility = ['public', 'private'].random()
        })

        it('should fail propmting error non-existing user', () => {
            saveNote(ownerId, undefined, text, tags, visibility)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        })

        })

        after(() => client.close())
})