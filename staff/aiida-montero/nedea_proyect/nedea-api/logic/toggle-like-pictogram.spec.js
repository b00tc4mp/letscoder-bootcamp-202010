require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix , randomId} = require('../utils/randoms')
require('../utils/array-polyfills')
const toggleLikePictogram = require('./toggle-like-pictogram')
const { models: { User }, mongoose } = require('nedea-data')
const { LengthError, ContentError } = require('../errors')
const { env: { MONGODB_URL } } = process

describe('toggleLikePictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let userId, fullname, email, password, pictogramId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            pictogramId = randomId().toString()
            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })

        it('should add to favourite', () => {
         return toggleLikePictogram (userId, pictogramId)
         .then (() => {
             return User.findById(userId)
         .then (user => {
             console.log(user)
             expect(user.likes).to.exist
             expect(user.likes[0].toString()).to.equal(pictogramId)
         })
         })

        })
    })


})