require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const savePet = require('./save-pet')
const { ContentError, LengthError } = require('../errors')
const { mongoose: { Types: { ObjectId } }, models: { User, Pet}, mongoose } = require('adogtapp-data')
const { env: { MONGODB_URL } } = process

describe('savePet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description, shelter

        beforeEach(() => {
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
            
            return User.create(user)
                .then(user => shelter = user.id)
            
            
        })

        it('shoud succeed on new pet', () => {
            return savePet(shelter, undefined, name, breed, species, color, description )
            .then(petId => {
                expect(ObjectId.isValid(petId)).be.true

                return Pet.find({ shelter })
            })
            .then(pet => {
                expect(pet).to.exist
                expect(pet[0].name).to.equal(name)
                expect(pet[0].breed).to.equal(breed)
                expect(pet[0].description).to.equal(description)
                expect(pet[0].color).to.equal(color)

            })
        })
        
        afterEach(() =>{ Pet.deleteMany()
    })

        describe('when user already has pets', () => {
            let  name, breed, species, color, description, petId

            beforeEach(()=>{

            name = randomStringWithPrefix('name')
            breed = randomStringWithPrefix('breed')
            species = 'dog'
            color = randomStringWithPrefix('color')
            description = randomStringWithPrefix('description')

            return Pet.create({name, breed, species, color, description, shelter})
                .then(pet => petId = pet.id)

            })
            it('should succeed updating the pet', () => {
                name = randomStringWithPrefix('name')
                breed = randomStringWithPrefix('breed')
                

                return savePet( shelter, petId, name, breed, species, color, description)
                .then(petId => {
                    expect(ObjectId.isValid(petId)).be.true

                    return Pet.find({ shelter})
                    .then(pets => {
                        expect(pets).to.have.lengthOf(1)
    
                        const [pet] = pets
    
                        expect(pet.name).to.equal(name)
                        expect(pet.breed).to.equal(breed)
                        
                        
                    })
                })
                
            })
            afterEach(() =>{
                User.deleteMany().then(()=>{Pet.deleteMany().then(()=>{})})
            })
        })
    })

    describe('on a non existing user', () => {
        let shelter,name, breed, species, color, description

        beforeEach(() => {
            
            name = randomStringWithPrefix('name')
            breed = randomStringWithPrefix('breed')
            species = 'dog'
            color = randomStringWithPrefix('color')
            description = randomStringWithPrefix('description')
            shelter = randomId()
        
            
        })

        it('shoud fail when user does not exists', () => {
            savePet(shelter, undefined, shelter, name, breed, species, color, description )

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
        })
    })

    describe('when any parameter is wrong', () => {
        
        describe('when name is wrong', () => {
            describe('when name is empty or blank', () => {
                let shelter, name, breed, species, color, description

                beforeEach(() => {
                    name = randomEmptyOrBlankString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                   
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(ContentError, 'name is empty or blank')
                })
            })

            describe('when name is not a string', () => {
                let shelter, name, breed, species, color, description

                beforeEach(() => {
                    userName = randomNonString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail when name is not an string', () => {
                    expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${name} is not a name`)
                })
            })
        })

        
        describe('when breed is wrong', () => {
            describe('when breed is empty or blank', () => {
                let shelter, name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomEmptyOrBlankString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail on an empty or blank breed', () => {
                    expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(ContentError, 'breed is empty or blank')
                })
            })

            describe('when breed is not a string', () => {
                let shelter, name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomNonString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail when breed is not an string', () => {
                    expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${breed} is not a breed`)
                })
            })
        })

        describe('when color is wrong', () => {
            
            describe('when color is not a string', () => {
                let shelter, name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomNonString()
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail when color is not an string', () => {
                    expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${color} is not a color`)
                })
            })
        })

        describe('when description is not a string', () => {
            let shelter,name, breed, species, color, description

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                breed = randomStringWithPrefix('breed')
                species = 'cat'
                color = randomStringWithPrefix('color')
                description = randomNonString()
                shelter = randomId()
            })

            it('should fail when description is not an string', () => {
                expect(() => savePet(shelter, undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${description} is not a description`)
            })
        })

         describe('when id is wrong', () => {
            describe('when id is empty or blank', () => {
                let shelter,id, name, breed, species, color, description

                beforeEach(() => {

                    id = randomEmptyOrBlankString()
                    name = randomStringWithPrefix('name')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                   
                })

                it('should fail on an empty or blank id', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(ContentError, 'id is empty or blank')
                })
            })

            describe('when id is not a string', () => {
                let shelter,id, name, breed, species, color, description

                beforeEach(() => {
                    id = randomNonString()
                    userName = randomStringWithPrefix('userName')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail when id is not an string', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(TypeError, `${id} is not an id`)
                })

            })
            describe('when id lenght is not 24', () => {
                let shelter, id, name, breed, species, color, description

                beforeEach(() => {
                    id = '5fbcd46c1cc24f9c7ce22db000'
                    userName = randomStringWithPrefix('userName')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomId()
                })

                it('should fail when id is not an string', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(LengthError, `id length ${id.length} is not 24`)
                })
                
            })
        })  

        describe('when shelter is wrong', () => {
            describe('when shelter is empty or blank', () => {
                let shelter,id, name, breed, species, color, description

                beforeEach(() => {

                    id = randomId()
                    name = randomStringWithPrefix('name')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomEmptyOrBlankString()
                   
                })

                it('should fail on an empty or blank shelter', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(ContentError, 'id is empty or blank')
                })
            })

            describe('when shelter is not a string', () => {
                let shelter,id, name, breed, species, color, description

                beforeEach(() => {
                    id = randomId()
                    userName = randomStringWithPrefix('userName')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = randomNonString()
                })

                it('should fail when shelter is not an string', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(TypeError, `${shelter} is not an id`)
                })

            })
            describe('when shelter lenght is not 24', () => {
                let shelter, id, name, breed, species, color, description

                beforeEach(() => {
                    id = randomId()
                    userName = randomStringWithPrefix('userName')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                    shelter = '5fbcd46c1cc24f9c7ce22db000'
                })

                it('should fail when shelter is not an string', () => {
                    expect(() => savePet(shelter, id, name, breed, species, color, description, () => { })).to.throw(LengthError, `id length ${shelter.length} is not 24`)
                })
                
            })
        })  


    }) 
    
    after(mongoose.disconnect)
    
})