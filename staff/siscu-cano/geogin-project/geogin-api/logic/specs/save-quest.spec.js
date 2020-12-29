require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('geogin-utils/randoms')
const authenticateUser = require('../save-quest')
const { mongoose, models: { User } } = require('geogin-data')
const bcrypt = require('bcryptjs')


const { env: { MONGODB_URL } } = process

describe('retrieveGame()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user and game exists', () => {
       
    })

    


    after(mongoose.disconnect)
})