require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const retrievePetImage = require('./retrieve-pet-image')
const { models: { User, Pet }, mongoose } = require('adogtapp-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrievePetImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description, petId, shelter, image

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

            image = '../populate/pets/default.jpg'

            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id
            
            const pet = {name, breed, species, color, description, shelter, image}

            const newPet = await Pet.create(pet)
            petId = '' + newPet._id

        })

        it.skip('shoud succed on a existing pet', () => {
            return retrievePetImage(petId)
               
            .then(result => expect(image).to.equal(result))
            
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Pet.deleteMany().then(()=>{})})
                
        )
    })

    describe('on a non existing pet', () => {
        let petId

        beforeEach(() => {
            
            petId = randomId()

        })

        it('shoud fail when pet does not exists', () => {
            return retrievePetImage(petId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`pet with id ${petId} not found`)
                })
            
        })

    }) 

     describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let petId
            
                    beforeEach(() => {
            
                        petId = randomEmptyOrBlankString()
                        
                    })
            
                    it('should fail on an empty or blank name', () => 
                        expect(() => retrievePetImage(petId, () => { })).to.throw(ContentError, 'id is empty or blank')
                    )
                })
                describe('when id is not a string', () => {
                    let petId
            
                    beforeEach(() => {
                        petId = randomNonString()
                        
                    })
            
                    it('should fail when id is not an string', () => 
                        expect(() => retrievePetImage(petId, () => { })).to.throw(TypeError, `${petId} is not an id`)
                    )
            
                })
                describe('when id lenght is not 24', () => {
                    let petId
            
                    beforeEach(() => {
                        petId = '5fbcd46c1cc24f9c7ce22db000'
                        
                    })
            
                    it('should fail when id is not an string', () => 
                        expect(() => retrievePetImage(petId, () => { })).to.throw(LengthError, `id length ${petId.length} is not 24`)
                    )
                    
                })
        
        }) 
    
    after(mongoose.disconnect)
    })
})
