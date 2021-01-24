require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Pictogram },  mongoose } = require('nedea-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomInteger } = require('../utils/randoms')
const savePictogramImage = require('./save-pictogram-image')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('savePictogramImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, title, description, owner, pictogramId

        beforeEach(async() => {
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            

            title = randomStringWithPrefix('title')
            description = randomStringWithPrefix('description')


            const user = { fullname, email, password}

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const pictogram = {title, description, owner}

            const newPictogram = await Pictogram.create(pictogram)
            pictogramId = '' + newPictogram._id

        })

        it('shoud succed on new pictogram', () => {
            let stream = '../populate/pictograms/default.jpg'

            savePictogramImage(pictogramId, stream)

            .then(() =>
                    Pictogram.findOne({ pictogramId })
                )
                .then(pictogram => {
                    expect(pictogram.pictogramId).to.equal(pictogramId)
                    expect(pictogram.stream).to.equal(stream)
                })
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Pictogram.deleteMany().then(()=>{})})

        )
    })

    })
