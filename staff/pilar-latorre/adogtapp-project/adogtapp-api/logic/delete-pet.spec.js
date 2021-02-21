require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const deletePet = require('./delete-pet')
const { models: { User, Pet }, mongoose } = require('adogtapp-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('deletePet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description, petId, shelter

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

            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id
            
            const pet = {name, breed, species, color, description, shelter}

            const newPet = await Pet.create(pet)
            petId = '' + newPet._id

        })

        it('shoud succed on a existing pet', () => {
            return deletePet(shelter, petId)
                .then(result => {
                  expect(result).to.be.undefined
                })
            })

        afterEach(() =>
            User.deleteMany().then(()=>{Pet.deleteMany().then(()=>{})})
                
        )
    })

    describe('on a non existing shelter', () => {
        let petId, shelter

        beforeEach(() => {
            
            shelter = randomId()
            petId = randomId()

        })

        it('shoud fail when shelter does not exists', () => 
            deletePet(shelter, petId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${shelter} not found`)
                })
            
        )

    }) 

    describe('on a non existing petId', () => {
        let petId, shelter, userName, email, password, address, city, phone, description

        beforeEach(async() => {
            userName = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            address = randomStringWithPrefix('address')
            city = randomStringWithPrefix('city')
            phone = randomStringWithPrefix('phone')
            description = randomStringWithPrefix('description')

            petId = randomId()

            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id

        })

        it('shoud fail when petId does not exists', () => 
            deletePet(shelter, petId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`pet with id ${petId} not found`)
                })
            
        )

    }) 

    

    describe('when any parameter is wrong', () => {

        describe('when shelter is wrong', () => {
            
            describe('when shelter is empty or blank', () => {
                let shelter, petId
        
                beforeEach(() => {
                    petId = randomId()
                    shelter = randomEmptyOrBlankString()
                    
                })
        
                it('should fail on an empty or blank shelter', () => {
                    expect(() => deletePet(shelter, petId, () => { })).to.throw(ContentError, 'id is empty or blank')
                })
            })
            describe('when shelter is not a string', () => {
                let petId, shelter
        
                beforeEach(() => {
                    petId = randomId()
                    shelter = randomNonString()
                    
                })
        
                it('should fail when shelter is not an string', () => {
                    expect(() => deletePet(shelter, petId, () => { })).to.throw(TypeError, `${shelter} is not an id`)
                })
        
            })
            describe('when shelter lenght is not 24', () => {
                let petId, shelter
        
                beforeEach(() => {
                    petId = randomId()
                    shelter = '5fbcd46c1cc24f9c7ce22db000'
                    
                })
        
                it('should fail when shelter is not an string', () => {
                    expect(() => deletePet(shelter, petId, () => { })).to.throw(LengthError, `id length ${shelter.length} is not 24`)
                })
                
            })
    
    })
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let shelter, petId
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = randomEmptyOrBlankString()
                        
                    })
            
                    it('should fail on an empty or blank name', () => {
                        expect(() => deletePet(shelter, petId, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let petId, shelter
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = randomNonString()
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => deletePet(shelter, petId, () => { })).to.throw(TypeError, `${petId} is not an id`)
                    })
            
                })
                describe('when id lenght is not 24', () => {
                    let petId, shelter
            
                    beforeEach(() => {
                        shelter = randomId()
                        petId = '5fbcd46c1cc24f9c7ce22db000'
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => deletePet(shelter, petId, () => { })).to.throw(LengthError, `id length ${petId.length} is not 24`)
                    })
                    
                })
        
        })
    
    after(mongoose.disconnect)
    })
})
