require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomNotId, randomWithPrefixAndSuffix, randomId, randomNonString, randomInteger, randomEmptyOrBlankString, randomNotNumber, randomWrongLengthId } = require('../utils/random')
const { models: { User, Product }, mongoose: { Types: { ObjectId } }, mongoose } = require('mercuris-data')
const saveProduct = require('./save-product')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveProduct()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let name, email, password, ownerId

        beforeEach(() => {
            name = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')


            const user = { name, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user doesn\'t have product', () => {
            //productId, ownerId, name, description, price)
            let name, description, price

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                price = randomInteger(10, 100)

            })

            it('should succeed creating a new product', () =>
                saveProduct(ownerId, undefined, name, description, price)
                    .then(productId => {
                        expect(ObjectId.isValid(productId)).be.true

                        return Product.find({ owner: ownerId })
                    })
                    .then(products => {
                        expect(products).to.have.lengthOf(1)

                        const [product] = products

                        expect(product.name).to.equal(name)
                        expect(product.description).to.equal(description)
                        expect(product.price).to.be.a('number')
                    })
            )

            afterEach(() => Product.deleteMany())
        })

        describe('when user already has products', () => {
            let name, description, price, productId

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                price = randomInteger(10, 100)


                return Product.create({ name, description, price, owner: ownerId })
                    .then(product => productId = product.id)
            })

            it('should succeed uppdating the product', () => {
                name = randomStringWithPrefix('name')
                descrition = randomStringWithPrefix('description')
                price = randomInteger(10, 100)

                return saveProduct(ownerId, productId, name, description, price)
                    .then(productId => {
                        expect(ObjectId.isValid(productId)).be.true

                        return Product.find({ owner: ownerId })
                    })
                    .then(products => {
                        expect(products).to.have.lengthOf(1)

                        const [product] = products

                        expect(product.id).to.equal(productId)
                        expect(product.name).to.equal(name)
                        expect(product.description).to.equal(description)
                        expect(product.price).to.be.a('number')


                    })
            })

            afterEach(() => Product.deleteMany())
        })

        describe('when user product does not exist (it was removed from db)', () => {
            let productId, description, price

            beforeEach(() => {
                productId = randomId()
                description = randomStringWithPrefix('description')
                price = randomInteger(10, 100)
            })
            //productId, ownerId, name, description, price)
            it('should fail on trying to update a product that does not exist any more', () =>
                saveProduct(ownerId, undefined, name, description, price)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`product with id ${productId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })
    describe('when description is not a string', () => {
        let productId, ownerId, name, description, price

        beforeEach(() => {
            productId = randomId()
            ownerId = randomId()
            name = randomStringWithPrefix('password')
            description = randomNonString()
            price = randomInteger(-1, -100)
        })

        it('should fail on a non string description', () => {
            expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(TypeError, `${description} is not a description`)
        })
    })

    describe('when description is empty or blank', () => {
        let productId, ownerId, name, description, price

        beforeEach(() => {
            productId = randomId()
            ownerId = randomId()
            name = randomStringWithPrefix('password')
            description = randomEmptyOrBlankString()
            price = randomInteger(-1, -100)
        })

        it('should fail on non-string description', () => {
            expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(ContentError, 'description is empty or blank')
        })
    })



    describe('when price is wrong', () => {
        describe('when price is negative number', () => {
            let productId, ownerId, name, description, price

            beforeEach(() => {
                productId = randomId()
                ownerId = randomId()
                name = randomStringWithPrefix('password')
                description = randomStringWithPrefix('description')
                price = randomInteger(-1, -100)
            })

            it('should fail on a negative number for price', () => {
                expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(ContentError, `${price} is a negative number`)
            })
        })

        describe('when price is not a number', () => {
            let productId, ownerId, name, description, price

            beforeEach(() => {
                productId = randomId()
                ownerId = randomId()
                name = randomStringWithPrefix('password')
                description = randomStringWithPrefix('description')
                price = randomNotNumber()
            })

            it('should fail on a non number price', () => {
                expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(TypeError, `${price} is not a number`)
            })
        })
    })
    describe('when Id is wrong', () => {
        describe('when Id is not a valid id', () => {
            describe('when productId is not a product Id', () => {
                let productId, name, description, price, ownerId

                beforeEach(() => {
                    productId = randomNotId()
                    ownerId = randomId()
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('password')
                    price = randomInteger(1, 100)
                    ownerId = randomId()
                })
                it('should fail when productId is not an id', () => {
                    expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(TypeError, `${productId} is not an id`)
                })
            })

        })
        describe('when ownerId is not an Id', () => {
            let productId, ownerId, description, price, name

            beforeEach(() => {
                productId = randomId()
                ownerId = randomNotId()
                description = randomStringWithPrefix('description')
                name = randomStringWithPrefix('name')
                price = randomInteger(10, 100)
            })
            //productId, ownerId, name, description, price)
            it('should fail on a non valid ownerId', () =>
                expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(TypeError, `${ownerId} is not an id`)

            )
        })

        describe('when productId has an invalid length', () => {
            let productId, name, description, price, ownerId
            beforeEach(() => {

                productId = randomWrongLengthId()
                name = randomStringWithPrefix('name')
                descritpion = randomStringWithPrefix('description')
                price = randomInteger(1, 100)
                ownerId = randomId()
            })

            it('should fail on a non valid productId length', () => {
                expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(LengthError, `id length ${productId.length} is not 24`)
            })
        })
        describe('when productId is not an Id', () => {
            let productId, ownerId, name, description, price

            beforeEach(() => {
                productId = randomNotId()
                ownerId = randomId()
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                price = randomInteger(1, 100)
                ownerId = randomId()
            })

            it('should fail when productId is not an id', () => {
                expect(() => saveProduct(ownerId, productId, name, description, price, () => { })).to.throw(TypeError, `${productId} is not an id`)
            })
        })

    })

    after(mongoose.disconnect)
})






