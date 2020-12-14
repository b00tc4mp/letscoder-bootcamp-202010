require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const findPets = require('./find-pets')
const { models: { User, Pet }, mongoose } = require('adogtapp-data')


const { env: { MONGODB_URL } } = process

describe('findPets()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description, petId, shelter, queryShelter, queryPet

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

            queryShelter = email
            queryPet = name
 
            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id
            
            const pet = {name, breed, species, color, description, shelter}

            const newPet = await Pet.create(pet)
            petId = '' + newPet._id

        })

        it('shoud succeed on a existing pet', () => {
            findPets(shelter, queryShelter, city, queryPet, species, breed)
               
                .then(pet => {
                    expect(pet.petId).to.equal(petId)
                    expect(pet.name).to.equal(name)
                    expect(pet.breed).to.equal(breed)
                    expect(pet.species).to.equal(species)
                    
                  
                })
        })

        it('should succeed with undefined parameters', () => {
            findPets(undefined)
               
                .then(pet => {
                    expect(pet).to.be(null)
                    
                  
                })
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Pet.deleteMany().then(()=>{})})
                
        )
    })

    

    describe('when any parameter is wrong', () => {

        describe('when queryShelter is wrong', () => {
            
            describe('when queryShelter is not a string', () => {
                let shelter, queryShelter, queryPet, city, breed, species
        
                beforeEach(() => {
                    shelter = randomId()
                    queryShelter = randomNonString()
                    city = randomStringWithPrefix('city')
                    queryPet = randomStringWithPrefix('queryPet')
                    breed = randomStringWithPrefix('breed')
                    species = 'dog'
                    
                })
        
                it('should fail when queryShelter is not an string', () => {
                    expect(() => findPets(shelter, queryShelter, city, queryPet, species, breed,() => { })).to.throw(TypeError, `${queryShelter} is not a query`)
                })
        
            })
        }) 

        describe('when queryPet is wrong', () => {
            
            describe('when queryPet is not a string', () => {
                let shelter, queryShelter, queryPet, city, breed, species
        
                beforeEach(() => {
                    shelter = randomId()
                    queryShelter = randomStringWithPrefix('queryShelter')
                    city = randomStringWithPrefix('city')
                    queryPet = randomNonString()
                    breed = randomStringWithPrefix('breed')
                    species = 'dog'
                    
                })
        
                it('should fail when queryPet is not an string', () => {
                    expect(() => findPets(shelter, queryShelter, city, queryPet, species, breed,() => { })).to.throw(TypeError, `${queryPet} is not a query`)
                })
        
            })
        }) 

        describe('when breed is wrong', () => {

            describe('when breed is not a string', () => {
                let shelter, queryShelter, queryPet, city, breed, species

                beforeEach(() => {
                    shelter = randomId()
                    queryShelter = randomStringWithPrefix('queryShelter')
                    city = randomStringWithPrefix('city')
                    queryPet = randomStringWithPrefix('queryPet')
                    breed = randomNonString()
                    species = 'dog'
                })

                it('should fail when breed is not an string', () => {
                    expect(() => findPets(shelter, queryShelter, city, queryPet, species, breed, () => { })).to.throw(TypeError, `${breed} is not a breed`)
                })
            })
        })

        describe('when city is wrong', () => {

            describe('when city is not a string', () => {
                let shelter, queryShelter, queryPet, city, breed, species

                beforeEach(() => {
                    shelter = randomId()
                    queryShelter = randomStringWithPrefix('queryShelter')
                    city = randomNonString()
                    queryPet = randomStringWithPrefix('queryPet')
                    breed = randomStringWithPrefix('breed')
                    species = 'dog'
                })

                it('should fail when city is not an string', () => {
                    expect(() => findPets(shelter, queryShelter, city, queryPet, species, breed, () => { })).to.throw(TypeError, `${city} is not a city`)
                })
            })
        })
    
    after(mongoose.disconnect)
    })
})
