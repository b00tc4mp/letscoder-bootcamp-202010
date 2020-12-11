require('dotenv').config()
require('../utils/array-polyfills')

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomNonString, randomEmptyOrBlankString, randomInteger, randomBoolean } = require('../utils/randoms')
const { FormatError, NotFoundError } = require('../errors')
const retrieveProductById = require('./retrieve-product-by-id')
const { Product } = require('../models')
const bcrypt = require('bcryptjs')

const { env: { MONGODB_URL } } = process

describe('retrieveProductById() SPEC', () => {
    before(() => mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }))

    describe('when product exists', () => {
        let name, description, price, glutenFree, vegan, alergenos, category, available, productId

        beforeEach(() => {
            name = randomStringWithPrefix('password')
            description = randomStringWithPrefix('password')
            price = randomInteger(10, 100)
            glutenFree = randomBoolean()
            vegan = randomBoolean()
            alergenos = new Array(randomInteger(10, 100))

            for (let i = 0; i < alergenos.length; i++)
                alergenos[i] = randomStringWithPrefix('alergeno')

            category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
            available = randomBoolean()

            const product = { name, description, price, glutenFree, vegan, alergenos, category, available }

            return Product.create(product)
                // .then(user => User.findOne({ email: user.email }).lean())
                .then(product => productId = product._id.toString())
        })
        
        it('should succed correct product id', () =>
            retrieveProductById(productId)
                .then(product => {
                    expect(product).to.exist
                    expect(product.name).to.equal(name)
                    expect(product.description).to.equal(description)
                    expect(product.price).to.equal(price)
                    expect(product.glutenFree).to.equal(glutenFree)
                    expect(product.vegan).to.equal(vegan)
                    expect(product.alergenos).to.deep.equal(alergenos)
                    expect(product.category).to.equal(category)
                    expect(product.available).to.equal(available)
    
                })
        )
    
        afterEach(() =>
            Product.deleteOne({ _id: productId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

})

describe('when product not exist', () => {
    let productId

    beforeEach(() => {
        productId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
        //valid ids but from users not products
    })

    it('should fail on valid id', () =>
        retrieveProductById(productId)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)

                expect(error.message).to.equal(`product with id ${productId} not found`)
            })
    )

})
describe('when any parameter is wrong', () => {
    describe('when productId is wrong', () => {
        describe('when productId is not a string', () => {
            let productId

            beforeEach(() => {
                productId = randomNonString()
            })

            it('should fail on non string product id', () => {
                expect(() => retrieveProductById(productId)).to.throw(TypeError, `${productId} is not an id`)
            })
        })

        describe('when product id is empty or blank', () => {
            let productId

            beforeEach(() => {
                productId = randomEmptyOrBlankString()
            })

            it('should fail on empty or blank product id', () => {
                expect(() => retrieveProductById(productId)).to.throw(Error, 'id is empty or blank')
            })
        })

    })
})

after(mongoose.disconnect)