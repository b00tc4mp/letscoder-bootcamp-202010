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


            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            queryCompany = randomStringWithPrefix('queryCompany')
            queryProduct = randomStringWithPrefix('queryProduct')
            price = '' + randomInteger(10, 100)

            const user = { name, email, password }

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const product = { name, description, price, owner }

            const newProduct = await Product.create(product)
            productId = '' + newProduct._id

        })

        it('shoud succed on new product', () => {


            findProducts(owner, queryCompany, queryProduct, price)

                .then(() =>
                    Product.findOne({ productId })
                )
                .then(product => {
                    expect(product.productId).to.equal(productId)
                    expect(product.descrption).to.equal(description)
                    expect(product.price).to.be.a('number')



                })
        })

        afterEach(() =>
            User.deleteMany().then(() => { Product.deleteMany().then(() => { }) })

        )
    })

    describe('when any parameter is wrong', () => {

        describe('when queryCompany is wrong', () => {

            describe('when queryCompany is not a string', () => {
                let owner, queryCompany, queryProduct, description, price

                beforeEach(() => {
                    owner = randomId()
                    queryCompany = randomNonString('queryCompany')
                    queryProduct =  randomStringWithPrefix('queryProduct')
                    description =  randomStringWithPrefix('description')
                    price = '' + randomInteger(10, 100)


                })

                it('should fail when queryCompany is not an string', () => {
                    expect(() => findProducts(owner, queryCompany, queryProduct, price, () => { })).to.throw(TypeError, `${queryCompany} is not a query`)
                })

            })
        })


        describe('when queryProduct is not a string', () => {
            let owner, queryCompany, queryProduct, price

            beforeEach(() => {
                owner = randomId()
                queryCompany = randomStringWithPrefix('queryCompany')
                queryProduct = randomNonString('queryProduct')
                price = '' + randomInteger(10, 100)

            })

            it('should fail when queryProduct is not an string', () => {
                expect(() => findProducts(owner, queryCompany, queryProduct, price, () => { })).to.throw(TypeError, `${queryProduct} is not a query`)
            })

        })
    })

    describe('when queryCompany is wrong', () => {
        let ownerId, queryProduct, queryCompany, price

        beforeEach(() => {
            owner = randomId()
            queryCompany = randomNonString('queryCompany')
            queryProduct = randomStringWithPrefix('queryProduct')
            price = '' + randomInteger(10, 100)
    })

    it('should fail when queryProduct is not an string', () => {
        expect(() => findProducts(ownerId, queryCompany, queryProduct, price, () => { })).to.throw(TypeError, `${queryCompany} is not a query`)
    })
 })

    describe('when price is wrong', () => {
        describe('when price is not a number', () => {

            let ownerId, name, description,productId
            beforeEach(() =>{
                productId = randomId()
                name = randomStringWithPrefix('password')
                description = randomStringWithPrefix('description')                
                price = randomNotNumber()
                ownerId = randomId()
            })

            it('should fail on a non number price', () => {
                
                expect(() => findProducts(productId, name, description, price, ownerId, () => {})).to.throw(TypeError, `${price} is not a number`)
        })
    })




})
after(mongoose.disconnect)
})
