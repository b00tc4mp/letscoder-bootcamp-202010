require('dotenv').config()

const { expect, use } = require('chai')
const { models: { User, Product }, mongoose } = require('malbec-data')
const { randomNonBoolean, randomNonNumber, randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomInteger, randomBoolean, randomNonArray } = require('../utils/randoms')
const { ValueError, ConflictError, NotFoundError, ContentError } = require('../errors')
const retrieveProductCategory = require('./retrieve-product-category')
const bcrypt = require('bcryptjs')
const product = require('malbec-data/models/schemas/product')



const { env: { MONGODB_URL } } = process
describe('retrieveProductCategory() SPEC', () => {
    before(() => mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }))

    describe('on valid category', () => {
        let fullname, email, password
        let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available
        let product

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = randomStringWithPrefix('price')
            glutenFree = randomBoolean()
            vegan = randomBoolean()
            alergenos = new Array(randomInteger(10, 100))

            for (let i = 0; i < alergenos.length; i++)
                alergenos[i] = randomStringWithPrefix('alergeno')

            category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
            available = randomBoolean()

            product = { name, description, price, glutenFree, vegan, alergenos, category, available }

            return bcrypt.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash }

                    return User.create(user)
                        .then(user => userId = user.id)
                        .then(() => Product.create(product))
                        .then(product => productId = product.id)
                })
        })

        it('should valid category', () =>
            retrieveProductCategory(category)
                .then(products => {
                    expect(products).to.exist
                    expect(products).to.be.instanceOf(Array)
                    const [product] = products.filter((product) => product.id === productId)
                    expect(product.id).to.equal(productId)
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
            User.deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>
                    Product.deleteOne({ name, description })
                        .then(result => expect(result.deletedCount).to.equal(1))
                )
        )
    })
    describe('on valid category', () => {
        let fullname, email, password
        let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available
        let product
        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            price = randomStringWithPrefix('price')
            glutenFree = randomBoolean()
            vegan = randomBoolean()
            alergenos = new Array(randomInteger(10, 100))

            for (let i = 0; i < alergenos.length; i++)
                alergenos[i] = randomStringWithPrefix('alergeno')

            category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
            available = randomBoolean()

            product = { name, description, price, glutenFree, vegan, alergenos, category, available }

            return bcrypt.hash(password, 10)
                .then(hash => {
                    const user = { fullname, email, password: hash }

                    return User.create(user)
                        .then(user => userId = user.id)
                })
        })
        it('should succed on empty category', () => {
            retrieveProductCategory(category)
                .then(products => {
                    expect(products).to.exist
                    expect(products).to.be.instanceOf(Array)
                    expect(products).to.have.lengthOf(0)
                })
        })
        afterEach(() =>
            User.deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })
    
    describe('when any parameter is wrong', () => {
        describe('when product category is wrong', () => {
            describe('when product category is not a string', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = randomNonString()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non string product category', () => {
                    expect(() => retrieveProductCategory(category))
                        .to.throw(TypeError, `${category} is not a category`)
                })
            })

            describe('when product category is empty or blank', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = randomEmptyOrBlankString()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on empty or blank product category', () => {
                    expect(() => retrieveProductCategory(category))
                        .to.throw(ContentError, 'category is empty or blank')
                })
            })
            describe('when product category is invalid', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = randomStringWithPrefix('category')
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on invalid product category', () => {
                    expect(() => retrieveProductCategory(category))
                        .to.throw(ValueError, 'category is incorrect')
                })
            })

        })
    })

    after(mongoose.disconnect)
})
//users
// productId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
// //valid ids but from users not products
// products
// userId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()
//                     //valid ids but from products not users
