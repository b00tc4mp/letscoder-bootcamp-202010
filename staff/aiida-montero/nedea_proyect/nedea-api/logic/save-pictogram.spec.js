require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomInteger, randomId } = require('../utils/randoms')
const { models: { User, Pictogram}, mongoose: { Types: { ObjectId } }, mongoose } = require('nedea-data')
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
    
            let pictogramId, title, description

            beforeEach(() => {

                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description')
                
            })

            it('should succeed creating a new pictogram', () =>
                savePictogram(pictogramId, ownerId, title, description)
                    .then(pictograms => {
                        expect(pictograms).to.have.lengthOf(24)
                        expect(ObjectId.isValid(pictograms)).be.true
                    })
            )

            it.only('should succeed modifying an existing pictogram', () => {
            savePictogram(pictogramId, ownerId, title, description)
                .then(pictograms => {
                    pictogramId = pictograms
                }
                )
                title = randomStringWithPrefix('Mytitle')
                description = randomStringWithPrefix('Mydescription')
                savePictogram(pictogramId, ownerId, title, description)
                .then(pictograms => {
                    expect(pictograms.title).to.be(title)
                    expect(pictograms.description).to.be(description)
                    expect(pictograms._id).to.have.lengthOf(24)
                    expect(ObjectId.isValid(pictograms._id)).be.true
                }
                )
            })

/*            afterEach(() => Pictogram.deleteMany()) */
        })

        describe('when user already has pictograms', () => {
            let pictogramId, title, description

            beforeEach(() => {

                title = randomStringWithPrefix('title')
                description = randomStringWithPrefix('description') 

             
            })

            it('should succeed uppdating the pictogram', () => {

                title = randomStringWithPrefix('title')
                descrition = randomStringWithPrefix('description')
                
           
                return savePictogram(pictogramId, ownerId, title, description)
                    .then(pictogramId => {
                        expect(ObjectId.isValid(pictogramId)).be.true

                        return Pictogram.find({ owner: ownerId })
                    })
                    .then(pictograms => {
                        expect(pictograms).to.have.lengthOf(1)

                        const [pictogram] = pictograms

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
                         
            })
       
            it('should fail on trying to update a pictogram that does not exist any more', () =>
                savePictogram(pictogramId, ownerId, title, description)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`pictogram with id ${pictogramId} not found`)
                    })
            )
            afterEach(() => User.deleteMany())
        })

    })
/* 
        describe('when ') */
   

    after(mongoose.disconnect)
})