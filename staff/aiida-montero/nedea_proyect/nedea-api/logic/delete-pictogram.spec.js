require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomId } = require('../utils/randoms')
const { models: { User, Pictogram }, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
const deletePictogram = require('./delete-pictogram')
const savePictogram = require('./save-pictogram')

const { env: {MONGODB_URL}} = process

describe ('deletePictogram()', () => {
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

        
        describe('when user delete a pictogram', () => {

            let title, description, pictogramId

            beforeEach(() => {
                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description')
                pictogramId = '5fdc77ff35a0182a60f8c79a'
            })

            it('should succeed delete pictogram', () => {
                return deletePictogram(pictogramId, ownerId)
                .then(pictogramId => {
                    expect(pictogramId).to.be.sealed
                })
            })

            afterEach(() => Pictogram.deleteMany()) 
        })
        
 
    })
    after(mongoose.disconnect)
})