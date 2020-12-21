require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Product },  mongoose } = require('mercuris-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomInteger } = require('../utils/random')
require('../utils/array-polyfills')
const saveProductImage = require('./save-product-image')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
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

            productImage = fs.createReadStream(path.join(__dirname,'../data/products/dafault.jpg'))

            const user = { name, email, password}

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const product = {name,  description, price, owner}

            const newProduct = await Product.create(product)
            productId = '' + newProduct._id

        })

        it('shoud succed on new product', () => {
           return saveProductImage(productId, productImage)
                .then(result => {
                   expect(result).to.be.undefined

                   return fsp.access(path.join(__dirname, `../data/products/${productId}.jpg`), fs.F_OK)
                })
        })

        afterEach(() => Promise.all([
            Product.deleteMany(),
            fsp.unlink(path.join(__dirname, `../data/products/${productId}.jpg`))
        ]))
    })

    describe('on a non existing user', () => {
        

        beforeEach(() => {    
            productId = randomId()
            productImage = fs.createReadStream(path.join(__dirname,'../data/products/default.jpg'))

        })

        it('shoud fail when user and product does not exists', () => {
            return saveProductImage(productId, productImage)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })

        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {

                describe('when id is empty or blank', () => {
                    let productId, productImage

                    beforeEach(() => {
                        productId = randomEmptyOrBlankString()
                        productImage = fs.createReadStream(path.join(__dirname,'../data/products/default.jpg'))

                    })

                    it('should fail on an empty or blank name', () => {
                        expect(() => saveProductImage(productId, productImage, () => { })).to.throw(ContentError, 'id is empty or blank')
                    })
                })
                describe('when id is not a string', () => {
                    let productId, productImage

                    beforeEach(() => {
                        productId = randomNonString()
                        productImage = fs.createReadStream(path.join(__dirname,'../data/products/default.jpg'))
                    })

                    it('should fail when id is not an string', () => {
                        expect(() => saveProductImage(productId, productImage, () => { })).to.throw(TypeError, `${productId} is not an id`)
                    })

                })
                describe('when id lenght is not 24', () => {
                    let productId, productImage

                    beforeEach(() => {
                        productId = '5fd76a98396e732e306c953125'
                        productImage = fs.createReadStream(path.join(__dirname,'../data/products/default.jpg'))
                    })

                    it('should fail when id is not an string', () => {
                        expect(() => saveProductImage(productId, productImage, () => { })).to.throw(LengthError, `id length ${productId.length} is not 24`)
                    })

                })

        })

    after(mongoose.disconnect)
    })
})