require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const savePetImage = require('./save-pet-image')
const { mongoose, models: { User, Pet } } = require('adogtapp-data')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('savePetImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description, petId, shelter, petImage

        beforeEach(async() => {
            userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            address = randomStringWithPrefix('address')
            city = randomStringWithPrefix('city')
            phone = randomStringWithPrefix('phone')
            description = randomStringWithPrefix('description')

            name = randomStringWithPrefix('name')
            breed = randomStringWithPrefix('breed')
            species = 'dog'
            color = randomStringWithPrefix('color')

            petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
            
            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id
            
            const pet = {name, breed, species, color, description, shelter}

            const newPet = await Pet.create(pet)
            petId = '' + newPet._id

        })

        it('shoud succeed saving the pet image', () => { 
            return savePetImage(shelter, petId, petImage)
                .then(result => {
                    expect(result).to.be.undefined

                    return fsp.access(path.join(__dirname, `../data/pets/${petId}.jpg`), fs.F_OK)
            })
            
            
        })

        afterEach(() => Promise.all([
            Pet.deleteMany(),
            fsp.unlink(path.join(__dirname, `../data/pets/${petId}.jpg`))
        ]))
    })

    describe('on a non existing user', () => {
        let petImage, petId, shelter

        beforeEach(() => {
            shelter = randomId()
            petId = randomId()
            petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))

        })

        it('shoud fail when user and pet does not exists', () => {
            return savePetImage(shelter, petId, petImage)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${shelter} not found`)
            })
            
        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let shelter, petId, petImage
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = randomEmptyOrBlankString()
                        petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
                        
                    })
            
                    it('should fail on an empty or blank name', () => 
                        expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(ContentError, 'id is empty or blank')
                    )
                })
                describe('when id is not a string', () => {
                    let shelter, petId, petImage
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = randomNonString()
                        petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
                    })
            
                    it('should fail when id is not an string', () => 
                        expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(TypeError, `${petId} is not an id`)
                    )
            
                })
                describe('when id lenght is not 24', () => {
                    let shelter, petId, petImage
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = '5fbcd46c1cc24f9c7ce22db000'
                        petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
                    })
            
                    it('should fail when id lenght is not 24', () => 
                        expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(LengthError, `id length ${petId.length} is not 24`)
                    )
                    
                })
        
        })

        describe('when shelter is empty or blank', () => {
            let shelter, petId, petImage
    
            beforeEach(() => {
                shelter = randomEmptyOrBlankString()
                petId = randomId()
                petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
                
            })
    
            it('should fail on an empty or blank shelter', () => 
                expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(ContentError, 'id is empty or blank')
            )
        })
        describe('when shelter is not a string', () => {
            let shelter, petId, petImage
    
            beforeEach(() => {
                shelter = randomNonString()
                petId = randomId()
                petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
            })
    
            it('should fail when shelter is not an string', () => 
                expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(TypeError, `${shelter} is not an id`)
            )
    
        })
        describe('when shelter lenght is not 24', () => {
            let shelter, petId, petImage
    
            beforeEach(() => {
                shelter = '5fbcd46c1cc24f9c7ce22db000'
                petId = randomId()
                petImage = fs.createReadStream(path.join(__dirname,'../data/pets/default.jpg'))
            })
    
            it('should fail when shelter length is not 24', () => 
                expect(() => savePetImage(shelter, petId, petImage, () => { })).to.throw(LengthError, `id length ${shelter.length} is not 24`)
            )
            
        })
    
    after(mongoose.disconnect)
    })
})






    
