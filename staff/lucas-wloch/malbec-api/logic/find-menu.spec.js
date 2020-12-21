require('dotenv').config()

const { expect } = require('chai')
const { models: { Product }, mongoose } = require('malbec-data')
const { randomNonBoolean, randomNonNumber, randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomInteger, randomBoolean, randomNonArray } = require('../utils/randoms')
const { ValueError, ConflictError, NotFoundError, ContentError } = require('../errors')
const findMenu = require('./find-menu')
const bcrypt = require('bcryptjs')



const { env: { MONGODB_URL } } = process
describe('findMenu() SPEC', () => {
    before(() => mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }))

    describe('on existing menu', () => {
        let menu

        it('should succed finding existing menu', () =>
            findMenu()
                .then(menu => {
                    expect(menu).to.exist
                    expect(menu).to.be.instanceOf(Object)

                    expect(menu.entrantes).to.be.instanceOf(Object)
                    expect(menu.entrantes.parrilla).to.be.instanceOf(Array)
                    expect(menu.entrantes.empanadas).to.be.instanceOf(Array)
                    expect(menu.entrantes.ensaladas).to.be.instanceOf(Array)

                    expect(menu.principales).to.be.instanceOf(Object)
                    expect(menu.principales.parrilla).to.be.instanceOf(Array)
                    expect(menu.principales.pescados).to.be.instanceOf(Array)
                    expect(menu.principales.otrasSugerencias).to.be.instanceOf(Array)

                    expect(menu.bebidas).to.be.instanceOf(Object)
                    expect(menu.bebidas.aguasRefrescos).to.be.instanceOf(Array)
                    expect(menu.bebidas.vinos).to.be.instanceOf(Array)
                    expect(menu.bebidas.cervezas).to.be.instanceOf(Array)
                    expect(menu.bebidas.tragos).to.be.instanceOf(Array)

                    expect(menu.postres).to.be.instanceOf(Array)


                })
        )
    })

    after(mongoose.disconnect)
})
//users
// productId = ["5fce18ca958cfd3e2490feb4", "5fc61cc871c3ab8240aecd97", "5fd26f956e06c444d854d6c2", "5fd35a599c87a73328271388"].random()
// //valid ids but from users not products
// products
// userId = ["5fd270466e06c444d854d6c3", "5fd278456e06c444d854d6cd", "5fd278b66e06c444d854d6ce", "5fd274b56e06c444d854d6c9"].random()
//                     //valid ids but from products not users
