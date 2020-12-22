require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomInteger } = require('../utils/random')
require('../utils/array-polyfills')
const deleteProduct = require('./delete-product')
const { models: { User, Product }, mongoose } = require('mercuris-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('deleteProduct()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let name, email, password, address, phone, price, description, ownerId

        beforeEach(async() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            address = randomStringWithPrefix('address')
            city = randomStringWithPrefix('city')
            phone = randomStringWithPrefix('phone')
            

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = randomInteger(10, 100)
           

            const user = { name, email, password, address, city, phone}

            const newUser = await User.create(user)
            ownerId = newUser._id.toString()
            
            const product = {name, description, price, owner: ownerId}

            const newProduct = await Product.create(product)
            productId = newProduct._id.toString()

        })

        it('shoud succed on a existing product', () => {
            return deleteProduct(ownerId,productId)
                .then(result => {
                    
                    expect(result).to.be.undefined
        })
    })

        afterEach(() =>
            User.deleteMany().then(()=>{Product.deleteMany().then(()=>{})})
                
        )
    })

    describe('on a non existing product', () => {
        let productId, ownerId

        beforeEach(() => {
            ownerId = randomId()
            productId = randomId()

        })

        it('shoud fail when product does not exists', () => {
            deleteProduct(ownerId, productId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`product with id ${productId} not found`)
                })
            
        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let productId, ownerId
            
                    beforeEach(() => {            
                        productId = randomEmptyOrBlankString()
                        ownerId = randomId()
                        
                    })
            
                    it('should fail on an empty or blank name', () => {
                        expect(() => deleteProduct(ownerId, productId, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let ownerId, productId 
            
                    beforeEach(() => {
                        ownerId= randomId()
                        productId = randomNonString()
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => deleteProduct(ownerId, productId, () => { })).to.throw(TypeError, `${productId} is not an id`)
                    })
            
                })
                describe('when id lenght is not 24', () => {
                    let ownerId, productId
            
                    beforeEach(() => {
                        ownerId= randomId()
                        productId = '5fbcd46c1cc24f9c7ce22db000'
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => deleteProduct(ownerId, productId, () => { })).to.throw(LengthError, `id length ${productId.length} is not 24`)
                    })
                    
                })
        
        })
    
    after(mongoose.disconnect)
    })
})