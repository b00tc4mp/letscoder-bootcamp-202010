require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Product }, mongoose } = require('mercuris-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomId, randomInteger, randomNotNumber } = require('../utils/random')
require('../utils/array-polyfills')
const findProducts = require('./find-products')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('findProducts()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let name, email, password, description, price, owner, productId, queryCompany, queryProduct

        beforeEach(async () => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            
            ownerId= randomId()
            queryCompany = randomStringWithPrefix('queryCompany')
            queryProduct = randomStringWithPrefix('queryProduct')
            price = '' + randomInteger(10, 100)
            priceMin = '' + randomInteger(10, 100)
            priceMax = '' + randomInteger(10, 100)


            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')

            const user = { name, email, password }

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const product = { name, description, price, owner }

            const newProduct = await Product.create(product)

            productId = '' + newProduct._id

        })

        it('shoud succed on new product', () => {


            findProducts(owner, queryCompany, queryProduct, price, priceMin, priceMax)

                .then(() =>
                    Product.findOne({ productId })
                )
                .then(product => {
                    expect(product.owner).to.equal(owner)
                    expect(product.queryCompany).to.equal(queryCompany)
                    expect(product.queryProduct).to.equal(queryProduct)
                    expect(product.price).to.be.a('number')
                    expect(product.priceMin).to.be.a('number')
                    expect(product.priceMax).to.be.a('number')
                })
        })

        afterEach(() =>
            User.deleteMany().then(() => { Product.deleteMany().then(() => { }) })

        )
    })

    describe('when any parameter is wrong', () => {

        describe('when queryCompany is wrong', () => {

            describe('when queryCompany is not a string', () => {
                let owner, queryCompany, queryProduct, price, priceMin, priceMax

                beforeEach(() => {
                    owner = randomId()
                    queryCompany = randomNonString()
                    queryProduct = randomStringWithPrefix('queryProduct')
                    price = '' + randomInteger(10, 100)
                    priceMin = '' + randomInteger(10, 100)
                    priceMax = '' + randomInteger(10, 100)
                })

                it('should fail when queryCompany is not an string', () => {
                    expect(() => findProducts(owner, queryCompany, queryProduct, price, priceMin, priceMax, () => { })).to.throw(TypeError, `${queryCompany} is not a query`)
                })

            })
        })


        describe('when queryProduct is not a string', () => {
            let owner, queryCompany, queryProduct, price, priceMin, priceMax

            beforeEach(() => {
                owner = randomId()
                queryCompany = randomStringWithPrefix('queryCompany')
                queryProduct = randomNonString()
                price = '' + randomInteger(10, 100)
                priceMin = '' + randomInteger(10, 100)
                priceMax = '' + randomInteger(10, 100)

            })

            it('should fail when queryProduct is not an string', () => {
                expect(() => findProducts(owner, queryCompany, queryProduct, price, priceMin, priceMax, () => { })).to.throw(TypeError, `${queryProduct} is not a query`)
            })

        })
    })

    
    describe('when price is wrong', () => {
        describe('when price is not a number', () => {

            let owner, queryCompany, queryProduct, price, priceMin, priceMax
            beforeEach(() => {
                owner = randomId()
                queryCompany = randomStringWithPrefix('queryCompany')
                queryProduct = randomStringWithPrefix('queryProduct')
                price = randomNotNumber()
                priceMin = '' + randomInteger(10, 100)
                priceMax = '' + randomInteger(10, 100)
            })

            it('should fail on a non number price', () => {

                expect(() => findProducts(owner, queryCompany, queryProduct, price, priceMin, priceMax, () => { })).to.throw(TypeError, `${price} is not a number`)
            })
        })




    })
    after(mongoose.disconnect)
})
