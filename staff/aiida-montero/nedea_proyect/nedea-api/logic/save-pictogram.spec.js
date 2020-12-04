require('dotenv').config()

const { expect } = require('chai')
const { MongoClient, ObjectId } = require('mongodb')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const context = require('./context')
const savePictogram = require('./save-pictogram')

const { env: { MONGODB_URL, DB_NAME } } = process

describe('savePictogram()', () => {
    let client, db, users, pictograms

    before(() => {
        client = new MongoClient(MONGODB_URL, { useUnifiedTopology: true })

        return client
            .connect()
            .then(connection => {
                contitle.connection = connection

                db = connection.db(DB_NAME)

                users = db.collection('users')

                pictograms = db.collection('pictograms')
            })
    })

    describe('when user already exists', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return users
                .insertOne(user)
                .then(result => ownerId = result.insertedId.toString())
        })

        describe('when user doesn\'t have pictograms', () => {
            let title, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = new Array(randomInteger(10, 100))

                for (let i = 0; i < description.length; i++)
                    description[i] = randomStringWithPrefix('tag')

                        })

            it('should succeed creating a new pictogram', () =>
                savePictogram(ownerId, undefined, title, description)
                    .then(() => {
                        const cursor = pictograms.find({ owner: ObjectId(ownerId) })

                        return cursor.toArray()
                            .then(pictograms => {
                                expect(pictograms).to.have.lengthOf(1)

                                const [pictogram] = pictograms

                                expect(pictogram.title).to.equal(title)

                                expect(pictogram.description).to.deep.equal(description)
                                
                            })
                    })
            )

            afterEach(() =>
                pictograms
                    .deleteMany({ owner: ObjectId(ownerId) })
                    .then(result => expect(result.deletedCount).to.equal(1))
            )
        })

        describe('when user already has pictograms', () => {
            let title, description, pictogramId

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = new Array(randomInteger(10, 100))

                for (let i = 0; i < description.length; i++)
                    description[i] = randomStringWithPrefix('tag')

            
                return pictograms.insertOne({ title, description, owner: ObjectId(ownerId)})
                    .then(result => pictogramId = result.insertedId.toString())
            })

            it('should succeed updating the pictogram', () => {
                title = randomStringWithPrefix('title')
                description = new Array(randomInteger(10, 100))

                for (let i = 0; i < description.length; i++)
                    description[i] = randomStringWithPrefix('tag')

            
                return savePictogram(ownerId, pictogramId, title, description)
                    .then(result => {
                        expect(result).to.be.undefined

                        const cursor = pictograms.find({ owner: ObjectId(ownerId) })

                        return cursor.toArray()
                            .then(pictograms => {
                                expect(pictograms).to.have.lengthOf(1)

                                const [pictogram] = pictograms

                                expect(pictogram.title).to.equal(title)

                                expect(pictogram.description).to.deep.equal(description)
                                
                            })
                    })
            })

            afterEach(() =>
                pictograms.deleteMany({ owner: ObjectId(ownerId) })
                    .then(result => expect(result.deletedCount).to.equal(1))
            )
        })

        describe('when user pictogram does not exist (it was removed from db)', () => {
            let title, description, pictogramId

            beforeEach(() => {
                pictogramId = '5fbcd46c1cc24f9c7ce22db0'

                title = randomStringWithPrefix('title')
                description = new Array(randomInteger(10, 100))

                for (let i = 0; i < description.length; i++)
                    description[i] = randomStringWithPrefix('tag')

                        })

            it('should fail on trying to update a pictogram that does not exist any more', () =>
                savePictogram(ownerId, pictogramId, title, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`pictogram with id ${pictogramId} not found`)
                    })
            )
        })

        afterEach(() =>
            users.deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user does not exist', () => {
        let title, description, ownerId

        beforeEach(() => {
            ownerId = '5fbcd46c1cc24f9c7ce22db1'

            title = randomStringWithPrefix('title')
            description = new Array(randomInteger(10, 100))

            for (let i = 0; i < description.length; i++)
                description[i] = randomStringWithPrefix('tag')

                })

        it('should fail alerting user with id does not exist', () =>
            savePictogram(ownerId, undefined, title, description)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        )
    })

    // TODO more unit test cases

    after(() => client.close())
})