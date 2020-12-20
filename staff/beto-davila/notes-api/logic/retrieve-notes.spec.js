require('dotenv').config()
const { expect } = require('chai')
const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const { User, Note } = require('../models')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const retrieveNotes = require('./retrieve-notes')
const { NotFoundError} = require('../errors')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveNotes()', () => {

    // creating db connection for all cases 
    before(() => {
        mongoose.connect(MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => {})
        .catch(error => console.log('unsuccessful connection', error))
    
    })

    describe('when user exists already', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }
        
            User
                .create(user)
                .then(result => ownerId = result.insertedId.toString())
                .catch(console.log)

                describe('when the user has notes created already', () => {
                    let text, visibility, tags
        
                    beforeEach(() => {
                        text = randomStringWithPrefix('text')
                        visibility = ['public', 'private'].random()
                        tags = new Array(randomInteger(10, 20)) // creates empty array indexes from 10 to 50
            
                        // populates each position in the array
                        for (let i = 0; i < tags.length; i++)
                            tags[i] = randomStringWithPrefix('tag')
            
                        const note = { ownerId, text, visibility, tags }
                            
                        Note
                            .create(note)
                            .then(result => undefined)
                            .catch(console.log)
                    })            
        
                    it('should retrieve successfully the notes', () => {
                        retrieveNotes(ownerId)
                            .then(notes => {
                                expect(notes).to.have.lengthOf(1)
        
                                const [note] = notes
        
                                expect(note.text).to.equal(text)
                                expect(note.tags).to.deep.equal(tags) // 'deep' tells the value of the tag
                                expect(note.visibility).to.equal(visibility)
                                expect(note.date).to.be.instanceOf(Date)
                            })
                            
                    })

                    afterEach(() => {
                        Note
                            .deleteMany({ owner: ObjectId(ownerId) })
                            .then( result => expect(result.deletedCount).to.equal(1) ) 
                    })   
                })

                describe('when the user has no notes', () => {
                    it('should fail on retrieving notes', () => {
                        retrieveNotes(ownerId)
                            .catch(error => {
                                expect(error).to.be.instanceOf(NotFoundError)

                                expect(error.message).to.equal('there are no notes to retrieve')
                            })
                    })
                })
        })
        
    })

    describe('when the user does not exist, but existed before', () => {
        let ownerId

        beforeEach(() => {
            ownerId = '5fbf234b25c054a94e22253f'
            
        })
        it('should fail on retrieving notes due to non-existing user')
            retrieveNotes(ownerId)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)

                    expect(error.message).to.equal(`the user with id ${ownerId} was not found`)
                })
    })

    after(() => mongoose.disconnect())
})