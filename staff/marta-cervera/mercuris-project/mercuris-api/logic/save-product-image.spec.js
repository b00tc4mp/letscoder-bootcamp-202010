require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Product },  mongoose } = require('mercuris-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomInteger } = require('../utils/random')
require('../utils/array-polyfills')
const saveProductImage = require('./save-product-image')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveProductImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let name, email, password, description, price, owner, productId

        beforeEach(async() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = '' + randomInteger(10, 100)   

            const user = { name, email, password}

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const product = {name,  description, price, owner}

            const newProduct = await Product.create(product)
            productId = '' + newProduct._id

        })

        it('shoud succed on new product', () => {
            let stream = '../populate/products/default.jpg'

            saveProductImage(productId, stream)

            .then(() =>
                    Product.findOne({ productId })
                )
                .then(product => {
                    expect(product.productId).to.equal(productId)
                    expect(product.stream).to.equal(stream)
                })
        })

        afterEach(() =>
            User.deleteMany().then(()=>{Product.deleteMany().then(()=>{})})

        )
    })

    describe('on a non existing user', () => {
        

        beforeEach(() => {

            stream = '../populate/products/default.jpg'
            productId = randomId()

        })

        it('shoud fail when user and pet does not exists', () => {
            saveProductImage(productId, stream)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })

        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {

                describe('when id is empty or blank', () => {
                    let productId, stream

                    beforeEach(() => {

                        productId = randomEmptyOrBlankString()
                        stream = '../populate/products/default.jpg'

                    })

                    it('should fail on an empty or blank name', () => {
                        expect(() => saveProductImage(productId, stream, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let productId, stream

                    beforeEach(() => {
                        productId = randomNonString()
                        stream = '../populate/products/default.jpg'
                    })

                    it('should fail when id is not an string', () => {
                        expect(() => saveProductImage(productId, stream, () => { })).to.throw(TypeError, `${productId} is not an id`)
                    })

                })
                describe('when id lenght is not 24', () => {
                    let productId, stream

                    beforeEach(() => {
                        productId = '5fd76a98396e732e306c953125'
                        stream = '../populate/products/default.jpg'
                    })

                    it('should fail when id is not an string', () => {
                        expect(() => saveProductImage(productId, stream, () => { })).to.throw(LengthError, `id length ${productId.length} is not 24`)
                    })

                })

        })

    after(mongoose.disconnect)
    })
})