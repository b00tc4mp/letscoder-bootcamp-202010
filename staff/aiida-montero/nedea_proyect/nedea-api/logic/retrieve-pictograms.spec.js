require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomId, randomInteger, randomEmptyOrBlankString, randomNonString, randomWrongLengthId } = require('../utils/randoms')
const retrievePictogram = require('./retrieve-pictograms')
const { models: { User,  Pictogram }, mongoose } = require('nedea-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrievePictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, title,  description

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            title = randomStringWithPrefix('title')
            description = randomStringWithPrefix('description')
            

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id

            const pictogram = {title, description, owner:userId}

            const newPictogram = await Pictogram.create(pictogram)
            PictogramId = '' + newPictogram._id
        })

        it('shoud succed on a existing pictogram', () => {
            retrievePictogram(PictogramId)

                .then(() =>
                    Pictogram.findOne({ pictogramId })
                )
                .then(pictogram => {
                    expect(pictogram.title).to.equal(title)
                    expect(pictogram.description).to.equal(description)
                    
                })
        })

        afterEach(() =>
            User.deleteMany().then(() => { Pictogram.deleteMany().then(() => { }) })
        )
    })

    describe('on a non existing pictogram', () => {
        let pictogramId

        beforeEach(() => {

            pictogramId = randomId()
        })

        it('shoud fail when pictogram does not exists', () => {
            retrievePictogram(pictogramId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`pictogram with id ${pictogramsId} not found`)
                })
        })
    })

    describe('when pictogramId is wrong', () => {
        describe('when pictogramId is empty or blank', () => {
            let pictogramId 

            beforeEach(() => {
                pictogramId = randomEmptyOrBlankString()
            })

            it('should fail on an empty or blank pictogramId', () => {
                expect(() => retrievePictogram(pictogramId, () => { })).to.throw(ContentError, 'id is empty or blank')
            })
        })

        describe('when pictogramId is not a string', () => {
            let pictogramId 

            beforeEach(() => {
                pictogramId = randomNonString()
            })

            it('should fail on a non string pictogramId', () => {
                expect(() => retrievePictogram(pictogramId,  () => { })).to.throw(TypeError, `${pictogramId} is not an id`)
            })
        })

        describe('when pictogramId length is wrong', () => {
            let pictogramId

            beforeEach(() => {
                pictogramId = randomWrongLengthId()
            })

            it('should fail on a non valid pictogramId length', () => {
                expect(() => retrievePictogram(pictogramId, () => { })).to.throw(LengthError, `id length ${pictogramId.length} is not 24`)
            })
        })
    })
after(mongoose.disconnect)
})
