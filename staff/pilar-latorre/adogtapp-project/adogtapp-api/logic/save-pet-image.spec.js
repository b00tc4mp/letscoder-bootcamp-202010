require('dotenv').config()
const Busboy = require('busboy')
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId } = require('../utils/randoms')
require('../utils/array-polyfills')
const savePetImage = require('./save-pet-image')
const { models: { User, Pet }, mongoose } = require('adogtapp-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('savePetImage()', () => {
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

            var formData = new FormData();
            formData.append("image", image);

            const busboy = new Busboy({ formData })

            const user = { userName, email, password, address, city, phone, description }

            const newUser = await User.create(user)
            shelter = '' + newUser._id
            
            const pet = {name, breed, species, color, description, shelter}

            const newPet = await Pet.create(pet)
            petId = '' + newPet._id

        })

        it.skip('shoud succeed on new pet', () => {
            busboy.on('file', (fieldname, file, filename, encoding, mimetype) => 
            savePetImage(petId, file).then( Pet.findOne({ petId })
            .then(pet => {
                console.log(pet)
                expect(pet.petId).to.equal(petId)
                expect(pet.image).to.equal(file)
            })
            )
                .catch(handleError) 

        )
            
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Pet.deleteMany().then(()=>{})})
                
        )
    })

    describe('on a non existing user', () => {
        let stream, petId

        beforeEach(() => {
            
            stream = '../populate/pets/default.jpg'
            petId = randomId()

        })

        it.skip('shoud fail when user and pet does not exists', () => {
            return savePetImage(petId, stream)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
            
        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let petId, stream
            
                    beforeEach(() => {
            
                        petId = randomEmptyOrBlankString()
                        stream = '../populate/pets/default.jpg'
                        
                    })
            
                    it('should fail on an empty or blank name', () => {
                        expect(() => savePetImage(petId, stream, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let petId, stream
            
                    beforeEach(() => {
                        petId = randomNonString()
                        stream = '../populate/pets/default.jpg'
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => savePetImage(petId, stream, () => { })).to.throw(TypeError, `${petId} is not an id`)
                    })
            
                })
                describe('when id lenght is not 24', () => {
                    let petId, stream
            
                    beforeEach(() => {
                        petId = '5fbcd46c1cc24f9c7ce22db000'
                        stream = '../populate/pets/default.jpg'
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => savePetImage(petId, stream, () => { })).to.throw(LengthError, `id length ${petId.length} is not 24`)
                    })
                    
                })
        
        })
    
    after(mongoose.disconnect)
    })
})






    
