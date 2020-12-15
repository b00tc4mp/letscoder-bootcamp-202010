require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomGameConsole, randomNotStringNumber, randomId, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const findGames = require('./find-games')
const { models: { User, Game }, mongoose } = require('gameloop-data')
const { ContentError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('findGames()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, query, gameconsole, budget, priceMin, priceMax, name, description, owner

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            query = randomStringWithPrefix('query')
            gameconsole = randomGameConsole()
            budget = '' + randomInteger(1, 1000)
            priceMin = '' + randomInteger(1, 1000)
            priceMax = '' + randomInteger(1, 1000)

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            owner = randomId()

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id

            const game = { name, description, gameconsole, budget, owner }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id

        })

        it('shoud succed on a existing game', () => {
            findGames(query, gameconsole, budget, priceMin, priceMax)

                .then(game => {
                    expect(game.query).to.equal(name)
                    expect(game.query).to.equal(description)
                    expect(game.gameconsole).to.equal(gameconsole)
                    expect(game.budget).to.be.a("number")
                    expect(game.priceMin).to.be.a("number")
                    expect(game.priceMax).to.be.a("number")
                    expect(game.owner).to.equal(owner)
                })
        })

        it('should succeed with undefined parameters', () => {
            findGames(undefined)
                .then(game => {
                    expect(game).to.be(null)
                })
        })

        afterEach(() =>
            User.deleteMany().then(() => { Game.deleteMany().then(() => { }) })

        )
    })

    describe('when any parameter is wrong', () => {
        describe('when query is wrong', () => {

            describe('when query is not a string', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomNonString()
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail when query is not an string', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(TypeError, `${query} is not a query`)
                })

            })

            describe('when query is empty or blank', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomEmptyOrBlankString()
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail for an empty or blank query', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(ContentError, `query is empty or blank`)
                })

            })
        })

        describe('when gameconsole is wrong', () => {
            describe('when gameconsole is not a string', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomNonString()
                    budget = '' + randomInteger(1, 1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on a non string gameconsole', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(TypeError, `${gameconsole} is not an string`)
                })
            })

            describe('when gameconsole is empty or blank', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomEmptyOrBlankString()
                    budget = '' + randomInteger(1, 1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on an empty or blank gameconsole', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(ContentError, 'gameconsole is empty or blank')
                })
            })

            describe('when gameconsole is not a valid gameconsole', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomStringWithPrefix('gameconsole')
                    budget = '' + randomInteger(1, 1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on a non valid gameconsole', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(TypeError, `${gameconsole} is not a valid gameconsole`)
                })
            })
        })

        describe('when budget is wrong', () => {
            describe('when budget is a negative number', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(-1, -1000)
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on a negative number for budget', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(ContentError, `${budget} is a negative number`)
                })
            })

            describe('when budget is not a number', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomGameConsole()
                    budget = randomNotStringNumber()
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on a non number budget', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(TypeError, `${budget} is not a number`)
                })
            })

            describe('when budget is empty or blank', () => {
                let query, gameconsole, budget, priceMin, priceMax

                beforeEach(() => {
                    query = randomStringWithPrefix('query')
                    gameconsole = randomGameConsole()
                    budget = randomEmptyOrBlankString()
                    priceMin = '' + randomInteger(1, 1000)
                    priceMax = '' + randomInteger(1, 1000)
                })

                it('should fail on an empty or blank budget', () => {
                    expect(() => findGames(query, gameconsole, budget, priceMin, priceMax, () => { })).to.throw(ContentError, 'price is empty or blank')
                })
            })
        })
        after(mongoose.disconnect)
    })
})
