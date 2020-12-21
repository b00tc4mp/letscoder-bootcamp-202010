require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomId, randomInteger, randomEmptyOrBlankString, randomNonString, randomWrongLengthId } = require('../utils/randoms')
const { models: { User,  Pictogram }, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
const { ContentError, LengthError } = require('../errors')
const retrieveFavouritePictogram = require('./retrieve-favourite-pictograms')

const { env: { MONGODB_URL } } = process

describe('retrieveFavouritePictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, title,  description, userId, pictogramId

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
            pictogramId = '' + newPictogram._id
            return User.updateOne({_id : ObjectId(userId)}, { $set: { likes : [pictogramId] } }) 
        })

        it('shoud succed on a existing pictogram', () => {
            return retrieveFavouritePictogram(userId)
                .then(pictogram => {
                    expect(pictogram[0].title).to.equal(title)
                    expect(pictogram[0].description).to.equal(description)
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
            retrieveFavouritePictogram(pictogramId)
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
                expect(() => retrieveFavouritePictogram(pictogramId, () => { })).to.throw(ContentError, 'id is empty or blank')
            })
        })

        describe('when pictogramId is not a string', () => {
            let pictogramId 

            beforeEach(() => {
                pictogramId = randomNonString()
            })

            it('should fail on a non string pictogramId', () => {
                expect(() => retrieveFavouritePictogram(pictogramId,  () => { })).to.throw(TypeError, `${pictogramId} is not an id`)
            })
        })

        describe('when pictogramId length is wrong', () => {
            let pictogramId

            beforeEach(() => {
                pictogramId = randomWrongLengthId()
            })

            it('should fail on a non valid pictogramId length', () => {
                expect(() => retrieveFavouritePictogram(pictogramId, () => { })).to.throw(LengthError, `id length ${pictogramId.length} is not 24`)
            })
        })
    })
after(mongoose.disconnect)
})



