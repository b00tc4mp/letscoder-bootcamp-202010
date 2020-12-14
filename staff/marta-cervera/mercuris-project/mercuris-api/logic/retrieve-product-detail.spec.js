require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomInteger } = require('../utils/random')
require('../utils/array-polyfills')
const retrieveProductDetail = require('./retrieve-product-detail')
const { models: { User, Product }, mongoose } = require('mercuris-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrieveProductDetail()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let  email, password, name, description, productId, owner

        beforeEach(async() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = '' + randomInteger(10, 100)   

            const user = { name, email, password }

            const newUser = await User.create(user)
             owner = '' + newUser._id
            
            const product = {name, description, price, owner}

            const newProduct = await Product.create(product)
            productId = '' + newProduct._id

        })

        it('shoud succed on a existing product', () => {
            retrieveProductDetail(productId)
               
            .then(() =>
                    Product.findOne({ productId })
                )
                .then(product => {
                    expect(product.productId).to.equal(productId)
                    expect(product.name).to.equal(name)
                    expect(product.description).to.equal(description)
                    
                  
                })
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Product.deleteMany().then(()=>{})})
                
        )
    })

    describe('on a non existing pet', () => {
        let productId

        beforeEach(() => {
            
            productId = randomId()

        })

        it('shoud fail when product does not exists', () => {
            retrieveProductDetail(productId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`product with id ${productId} not found`)
            })
            
        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {
            
                describe('when id is empty or blank', () => {
                    let productId
            
                    beforeEach(() => {
            
                        productId = randomEmptyOrBlankString()
                        
                    })
            
                    it('should fail on an empty or blank name', () => {
                        expect(() => retrieveProductDetail(productId, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let productId
            
                    beforeEach(() => {
                        productId = randomNonString()
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => retrieveProductDetail(productId, () => { })).to.throw(TypeError, `${productId} is not an id`)
                    })
            
                })
                describe('when id lenght is not 24', () => {
                    let productId
            
                    beforeEach(() => {
                        productId = '5fd76a98396e732e306c953242'
                        
                    })
            
                    it('should fail when id is not an string', () => {
                        expect(() => retrieveProductDetail(productId, () => { })).to.throw(LengthError, `id length ${productId.length} is not 24`)
                    })
                    
                })
        
        })
    
    after(mongoose.disconnect)
    })
})
