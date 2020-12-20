require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomId } = require('../utils/randoms')
const { models: { User, Pictogram }, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
const findPictogram = require('./find-pictogram')
const { query } = require('nedea-data/models/schemas/user')
const pictogram = require('nedea-data/models/schemas/pictogram')


const { env: { MONGODB_URL } } = process

describe('findPictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists', () => {
        debugger
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
                Pictogram.create(ownerId, title, description)
            })
            
            it.only('should find pictogram', () => {
                return findPictogram(title)
                .then(pictogram =>{
                    console.log(pictogram)
                   expect(pictogram[1].description).to.equal(description)
                })
            })
        })

    })

})