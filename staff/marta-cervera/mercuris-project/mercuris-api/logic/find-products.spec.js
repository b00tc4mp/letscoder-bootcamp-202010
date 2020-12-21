require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Product }, mongoose } = require('mercuris-data')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomId, randomInteger, randomNotStringNumber, randomEmptyOrBlankString, randomNotId } = require('../utils/random')
require('../utils/array-polyfills')
const findProducts = require('./find-products')
const { ContentError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('findProducts()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, name, email, password, description, price, owner, productId, queryCompany, queryProduct, priceMin, priceMax

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = '' + randomInteger(10, 100)

            queryCompany = email
            queryProduct = name
            priceMin = '' + randomInteger(10, 100)
            priceMax =  '' + randomInteger(10, 100)


            const user = { name, email, password }

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const product = { owner, name, description, price, priceMin, priceMax }

            const newProduct = await Product.create(product)

            productId = '' + newProduct._id


        })

        it('shoud succed on a existing product', () => {
            return findProducts(owner, queryCompany, queryProduct, price, priceMin,priceMax)
                .then(product => {                    
                    expect(product[0].name).to.equal(name)
                    expect(product[0].description).to.equal(description)
                    expect(product[0].price).to.be.a('number')

                })

        })
        it('should succeed with undefined parameters', () => {
            return findProducts(undefined)
                .then(product => {
                    expect(product[0].id).to.equal(productId)
                    expect(product[0].name).to.equal(name)
                    expect(product[0].description).to.equal(description)
                    expect(product[0].price).to.be.a("number")
               
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


    /* describe('when price is wrong', () => {
        describe('when price is not a number', () => {
            let owner, queryCompany, queryProduct, price, priceMin, priceMax
            beforeEach(() => {
                owner = randomId()
                queryCompany = randomStringWithPrefix('queryCompany')
                queryProduct = randomStringWithPrefix('queryProduct')
                price = randomNotStringNumber()
                priceMin = '' + randomInteger(10, 100)
                priceMax = '' + randomInteger(10, 100)
            })

            it('should fail on a non number price', () => {
                expect(() => findProducts(owner, queryCompany, queryProduct, price, priceMin, priceMax, () => { })).to.throw(TypeError, `${price} is not a number`)
            })
        })
        


    }) */


    after(mongoose.disconnect)
})
