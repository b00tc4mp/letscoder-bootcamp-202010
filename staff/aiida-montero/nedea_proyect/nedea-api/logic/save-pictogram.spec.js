require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomId } = require('../utils/randoms')
const { models: { User, Pictogram }, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
const savePictogram = require('./save-pictogram')


const { env: { MONGODB_URL } } = process

describe('savePictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')


            const user = { fullname, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user create a pictogram', () => {

            let title, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description')
            })

            it('should succeed creating a new pictogram', () =>
                savePictogram(undefined, ownerId, title, description)
                    .then(pictogramId => {
                        //id
                        expect(pictogramId).to.have.lengthOf(24)
                        expect(ObjectId.isValid(pictogramId)).be.true

                        return Pictogram.findById(pictogramId)
                            .then(pictogram => {
                                expect(pictogram.title).to.equal(title)
                                expect(pictogram.description).to.equal(description)
                            })
                    })

            )

            afterEach(() => Pictogram.deleteMany())
        })

        describe('when user already has pictograms', () => {
            let pictogramId, title, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description')

                return Pictogram.create({ title, description, owner: userId })
                    .then(pictogram => pictogramId = pictogram.id)
            })

            it('should succeed uppdating the pictogram', () => {
                title = randomStringWithPrefix('title')
                descrition = randomStringWithPrefix('description')

                return savePictogram(pictogramId, ownerId, title, description)
                    .then(pictogramId => {
                        expect(ObjectId.isValid(pictogramId)).be.true

                        return Pictogram.findById(pictogramId)
                    })
                    .then(pictogram => {
                        expect(pictogram.title).to.equal(title)
                        expect(pictogram.description).to.equal(description)
                    })
            })

            afterEach(() => Pictogram.deleteMany())
        })

        describe('when user pictogram does not exist (it was removed from db)', () => {
            let pictogramId, title, description

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description')
                pictogramId = new ObjectId().toString()
            })

            it('should fail on trying to update a pictogram that does not exist any more', () =>
                savePictogram(pictogramId, ownerId, title, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal(`pictogram with id ${pictogramId} not found`)
                    })
            )

            afterEach(() => Pictogram.deleteMany())
        })

        afterEach(() => User.deleteMany())
    })

    describe('should throw an error when can not find id', () => {
        let fullname, email, password, ownerId, pictogramId, title, description

        beforeEach(() => {
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            title = randomStringWithPrefix('title')
            description = randomStringWithPrefix('description')
            const user = { fullname, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        it('should throw error if userid does not exist', () => {
            ownerId = new ObjectId().toString()

            return savePictogram(pictogramId, ownerId, title, description)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        })

        it('should throw error if pictogram id does not exist', () => {
            pictogramId = new ObjectId()

            return savePictogram(pictogramId, ownerId, title, description)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`pictogram with id ${pictogramId} not found`)
                })
        })

        afterEach(() => User.deleteMany())
    })

    after(mongoose.disconnect)
})