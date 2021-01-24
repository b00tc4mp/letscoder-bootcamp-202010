require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomId } = require('../utils/randoms')
const { models: { User, Pictogram }, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
const deletePictogram = require('./delete-pictogram')
const fs = require('fs').promises
const path = require('path')

const { env: {MONGODB_URL}} = process

describe ('deletePictogram()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists', () => {
        let fullname, email, password, ownerId, title, description, pictogramId, filePath

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
                    .then(result => { 
                    pictogramId = result.id
                    filePath = path.join(__dirname, `../data/pictograms/${pictogramId}.jpg`)
                    return fs.writeFile(filePath)
                    })
                })  
        })

            it('should succeed delete pictogram', () => {
                return deletePictogram(pictogramId, ownerId)
                .then(pictogramId => {
                    expect(pictogramId).to.be.sealed
                })
            })

            afterEach(() => Pictogram.deleteMany()) 
        })
        
        after(mongoose.disconnect)
 
    })