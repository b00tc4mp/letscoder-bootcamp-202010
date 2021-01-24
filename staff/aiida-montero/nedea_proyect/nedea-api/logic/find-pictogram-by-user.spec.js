require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomId } = require('../utils/randoms')
const { models: { User, Pictogram }, mongoose} = require('nedea-data')
const findPictogram = require('./find-pictograms-by-user')

const { env: { MONGODB_URL } } = process

describe('findPictogramByUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists', () => {
        let fullname, email, password, ownerId, title, description

        beforeEach(() => {
            fullname = randomStringWithPrefix('fullname')
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            title = randomStringWithPrefix('title')
            description = randomStringWithPrefix('description')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => {
                    ownerId = user.id
                    return Pictogram.create({owner : ownerId, title, description})
                })

        })
       
            it('should find pictogram', () => {
                 return findPictogram(ownerId)
                .then(pictogram =>{
                   expect(pictogram[0].description).to.equal(description)
                })
            })
        })

    })

