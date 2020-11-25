require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')


const saveNote = require('./save-note')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomInteger } = require('../utils/randoms')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('saveNote()', () => {
    let client, db, users, notes

    before(() => {

        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client
            .connect()
            .then(connection => {
                if (error) return done(error)

                context.connection = connection

                db = connection.db(DB_NAME)

                users = db.collection('users')

                notes = db.collection('notes')

            })
    })

    describe('on existing user', () => {
        let fullname, email, password, ownerId, user

        beforeEach(() => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            user = { fullname, email, password }

            return users
                .insertOne(user)
                .then(result => userId = result.insertedId.toString())
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

            it('shoud succeed creating a new new note', () =>
                saveNote(undefined, text, tags, ownerId, visibility)
                    .then(() => {

                        const cursor = notes.find({ owner: ObjectId(ownerId) })

                        return cursor.toArray()
                            .then(notes => {

                                expect(notes).to.have.lengthOf(1)

                                const [note] = notes
                                expect(note.text).to.equal(text)

                                expect(note.tags).to.deep.equal(tags)
                                expect(note.visibility).to.equal(visibility)
                                expect(note.date).to.be.instanceOf(Date)
                            })
                    })
            )
            afterEach(() =>
                notes
                    .deleteMany({ owner: ObjectId(ownerId) })
                    .then(result => expect(result.deletedCount).to.equal(1))
            )

        })


        

        describe('when user already has notes', () => {
            let text, tags, visibility, noteId

            beforeEach(() => {
                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))
                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()

                return notes.insertOne({ text, tags, visibility, owner: ObjectId(userId) })
                    .then(result => noteId = result.insertedId.toString())
            })

            it('shoud succed on updating note', () => {

                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))

                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()



                return saveNote(noteId, text, tags, userId, visibility)
                    .then(result => {
                        expect(result).to.be.undefined

                        const cursor = notes.findOne({ text, visibility, tags })

                        return cursor.toArray()
                            .then(notes => {
                                expect(notes).to.have.lengthOf(1)

                                const [note] = notes
                                expect(note.text).to.equal(text)

                                expect(note.tags).to.deep.equal(tags)
                                expect(note.visibility).to.equal(visibility)
                                expect(note.date).to.be.instanceOf(Date)
                            }
                            )
                    })
                })

                afterEach( () =>
                    notes.deleteMany({ owner: ObjectId(userId) })
                    .then(result => expect(result.deletedCount).to.equal(1))
                )

                
                
            })
        })

        describe('when user note does not exist ( it was removed from db)', () => {
            let text, tags, visibility, noteId

            beforeEach( () => {
                noteId = "5fba62c39633f535c432b000"

                text = randomStringWithPrefix('text')
                tags = new Array(randomInteger(10, 100))
                for (let i = 0; i < tags.length; i++)
                    tags[i] = randomStringWithPrefix('tag')

                visibility = ['public', 'private'].random()
            })

            it('should fail on trying to update a note that does not exist anymore', () =>
                saveNote(ownerId, noteId, text, visibility, tags)
                .catch( error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`note with id ${noteId} not found`)
                })
            )
            
            afterEach( () =>
                users.deleteOne({ fullname, email })
                .then(result => expect(result.deletedCount).to.equal(1))
    
            )
        })

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

            it('should fail alerting user with id does not exist', () => 
                saveNote(undefined,text,tags,ownerId,visibility)
                .catch( error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })            
            )
        })
        
        after( () => client.close() )
    })