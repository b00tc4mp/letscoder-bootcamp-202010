require('dotenv').config()

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
require('../utils/array-polyfills')
const savePet = require('./save-pet')
const { User, Pet } = require('../models')

const { env: { MONGODB_URL } } = process

describe('savePet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let userName, email, password, address, city, phone, name, breed, species, color, description

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
                .then(user => userId = user.id)
            
            
        })

        it('shoud succed on new pet', () => {
            savePet(undefined, name, breed, species, color, description, userId)
               
            .then(() =>
                    Pet.findOne({ name })
                )
                .then(pet => {
                    expect(pet).to.exist
                    expect(pet.name).to.equal(name)
                    expect(pet.breed).to.equal(breed)
                    expect(pet.description).to.equal(description)
                    expect(pet.color).to.equal(color)

                })
        })

        afterEach(() =>
            User
                .deleteOne({ userName, email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(Pet
                    .deleteOne({name, breed, color})
                        .then(result => expect(result.deletedCount).to.equal(1))
 
                
            )
        )
    })

    describe('on a non existing user', () => {
        let name, breed, species, color, description, shelter

        beforeEach(() => {
            
            name = randomStringWithPrefix('name')
            breed = randomStringWithPrefix('breed')
            species = 'dog'
            color = randomStringWithPrefix('color')
            description = randomStringWithPrefix('description')
            shelter = '5fbcd46c1cc24f9c7ce22db1'
        
            
        })

        it('shoud fail when user does not exists', () => {
            savePet(undefined, name, breed, species, color, description, userId)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
            
        })

    })

    describe('when any parameter is wrong', () => {
        
        describe('when name is wrong', () => {
            describe('when name is empty or blank', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomEmptyOrBlankString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                   
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(Error, 'name is empty or blank')
                })
            })

            describe('when name is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    userName = randomNonString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when name is not an string', () => {
                    expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${name} is not a name`)
                })
            })
        })

        
        describe('when breed is wrong', () => {
            describe('when breed is empty or blank', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomEmptyOrBlankString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank breed', () => {
                    expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(Error, 'breed is empty or blank')
                })
            })

            describe('when breed is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomNonString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when breed is not an string', () => {
                    expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${breed} is not a breed`)
                })
            })
        })

        describe('when color is wrong', () => {
            
            describe('when color is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomNonString()
                    description = randomStringWithPrefix('description')
                })

                it('should fail when color is not an string', () => {
                    expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${color} is not a color`)
                })
            })
        })

        describe('when description is not a string', () => {
            let name, breed, species, color, description

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                breed = randomStringWithPrefix('breed')
                species = 'cat'
                color = randomStringWithPrefix('color')
                description = randomNonString()
            })

            it('should fail when description is not an string', () => {
                expect(() => savePet(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${description} is not a description`)
            })
        })
    }) 


    
    after(mongoose.disconnect)
    
})