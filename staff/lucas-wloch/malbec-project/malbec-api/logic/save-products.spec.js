require('dotenv').config()

const { expect, use } = require('chai')
const { models: { User, Product }, mongoose } = require('malbec-data')
const { randomNonBoolean, randomNonNumber, randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomInteger, randomBoolean, randomNonArray } = require('../utils/randoms')
const { ValueError, ConflictError, NotFoundError, ContentError } = require('../errors')
const saveProducts = require('./save-products')
const bcrypt = require('bcryptjs')
const product = require('malbec-data/models/schemas/product')



const { env: { MONGODB_URL } } = process
describe('saveProducts() SPEC', () => {
    before(() => mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }))

    describe('on valid token/userId', () => {
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

        it('should succed saving new product', () =>
            saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                .then(_productId => productId = _productId)
                .then(() => Product.findById(productId))
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
            User.deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>
                    Product.deleteOne({ name, description })
                        .then(result => expect(result.deletedCount).to.equal(1))
                )
        )
    })
    describe('on valid token/userId', () => {
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
        it('should succed on updating existing product', () => {
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

            return saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                .then(_productId => productId = _productId)
                .then(() => Product.findById(productId))
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
        }
        )
        afterEach(() =>
            User.deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>
                    Product.deleteOne({ name })
                        .then(result => expect(result.deletedCount).to.equal(1))
                )
        )
    })

    describe('on valid token/userId', () => {
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
        it('should fail on saving existing product', () =>
            saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                .catch(error => {
                    expect(error).to.be.instanceOf(ConflictError)
                    expect(error.message).to.equal(`product with name ${name} already exists`)
                })
        )
        afterEach(() =>
            User.deleteOne({ email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>
                    Product.deleteOne({ name })
                        .then(result => expect(result.deletedCount).to.equal(1))
                )
        )
    })

    describe('on no longer valid token/userid', () => {
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
                        .then(userId => User.deleteOne({ _id: userId }))
                        .then(result => expect(result.deletedCount).to.equal(1))

                })
        })

        it('should fail on non valid token/userId', () =>
            saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        )

    })
    describe('when any parameter is wrong', () => {
        describe('when userId is wrong', () => {
            describe('when userId is not a string', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = randomNonString()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non string userId', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${userId} is not an id`)
                })
            })

            describe('when userId is empty or blank', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = randomEmptyOrBlankString()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()
                })

                it('should fail on empty or blank userId', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ContentError, 'id is empty or blank')
                })
            })

        })
        describe('when productId is wrong', () => {
            describe('when productId is not a string', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    // productId = randomNonString()
                    productId = randomNonString()
                })

                // it('should fail on non string productId', () => {
                //     saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                //         .catch(error => {
                //             expect(error).to.be.instanceOf(TypeError)
                //             expect(error.message).to.equal(`${productId} is not an id`)
                //         })
                // })
                it('should fail on non string productId', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${productId} is not an id`)
                })
            })

            describe('when productId is empty or blank', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = randomEmptyOrBlankString()
                })

                it('should fail on empty or blank productId', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ContentError, 'id is empty or blank')
                })
            })

            describe('when productId doesnt match any product', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    //valid ids but from users
                })

                it('should fail non matching productId', () =>
                    saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available)
                        .catch(error => {
                            expect(error).to.be.instanceOf(NotFoundError)
                            expect(error.message).to.equal(`product with id ${productId} not found`)
                        })
                )
            })

        })

        describe('when product name is wrong', () => {
            describe('when product name is not a string', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomNonString()
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non string product name', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${name} is not a name`)
                })
            })

            describe('when product name is empty or blank', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomEmptyOrBlankString()
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on empty or blank product name', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ContentError, 'name is empty or blank')
                })
            })

        })

        describe('when product description is wrong', () => {
            describe('when product description is not a string', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomNonString()
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non string product description', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${description} is not a description`)
                })
            })

            describe('when product description is empty or blank', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomEmptyOrBlankString()
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on empty or blank product description', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ContentError, 'description is empty or blank')
                })
            })

        })

        describe('when product price is wrong', () => {
            describe.skip('when product price is not a number', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    // price = 5
                    price = randomNonNumber()
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non snumber product price', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${price} is not a price`)
                })
            })
        })

        describe('when product glutenFree is wrong', () => {
            describe('when product glutenFree is not a boolean', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomNonBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non boolean product glutenFree', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `glutenFree has to be true or false`)
                })
            })
        })

        describe('when product vegan is wrong', () => {
            describe('when product vegan is not a boolean', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomNonBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomStringWithPrefix('alergeno')
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non boolean product vegan', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `vegan has to be true or false`)
                })
            })
        })

        //alergenos
        describe('when product alergenos is wrong', () => {
            describe('when product alergenos is not an array', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = randomNonArray()
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non array product alergenos', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `${alergenos} is not an array`)
                })
            })
            describe('when product alergenos are not strings', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomNonString()
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non string product alergenos', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, 'this is not a alergen Ingredient')
                })
            })

            describe('when product alergenos is empty or blank', () => {
                let userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('description')
                    price = randomStringWithPrefix('price')
                    glutenFree = randomBoolean()
                    vegan = randomBoolean()
                    alergenos = new Array(randomInteger(10, 100))
                    for (let i = 0; i < alergenos.length; i++)
                        alergenos[i] = randomEmptyOrBlankString()
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on empty or blank product alergenos', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ContentError, 'alergen Ingredient is empty or blank')
                })
            })

        })
        // category 

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
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
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
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
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
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(ValueError, 'category is incorrect')
                })
            })

        })
        //available
        describe('when product available is wrong', () => {
            describe('when product available is not a boolean', () => {
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
                    category = ["entrantes-parrilla", "empanadas", "ensaladas", "parrilla", "pescados", "otras-sugerencias", "acompañamientos-guarniciones", "postres", "aguas-refrescos", "vinos", "cervezas"].random()
                    available = randomNonBoolean()
                    userId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
                    productId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()

                })

                it('should fail on non boolean product available', () => {
                    expect(() => saveProducts(userId, productId, name, description, price, glutenFree, vegan, alergenos, category, available))
                        .to.throw(TypeError, `available has to be true or false`)
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
