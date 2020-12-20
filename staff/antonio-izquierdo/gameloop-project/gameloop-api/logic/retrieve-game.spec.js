require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomGameConsole, randomId, randomInteger, randomEmptyOrBlankString, randomNonString, randomWrongLengthId } = require('../utils/randoms')
const retrieveGame = require('./retrieve-game')
const { models: { User, Game }, mongoose } = require('gameloop-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrieveGame()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, name, description, gameconsole, budget, owner, gameId

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            gameconsole = randomGameConsole()
            budget = '' + randomInteger(1, 1000)
            owner = randomId()

            gameId = randomId()

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id

            const game = { name, description, gameconsole, budget, owner }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id
        })

        it('shoud succed on a existing game', () => {
            return retrieveGame(gameId)
                .then(game => {
                    expect(game.name).to.equal(name)
                    expect(game.description).to.equal(description)
                    expect(game.gameconsole).to.equal(gameconsole)
                    expect(game.budget).to.be.a('number')
                    expect(game.id).to.equal(gameId)
                })
        })

        afterEach(() =>
            User.deleteMany().then(() => { Game.deleteMany().then(() => { }) })
        )
    })

    describe('on a non existing game', () => {
        let gameId

        beforeEach(() => {

            gameId = randomId()
        })

        it('shoud fail when game does not exists', () => {
            return retrieveGame(gameId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`game with id ${gameId} not found`)
                })
        })
    })

    describe('when gameId is wrong', () => {
        describe('when gameId is empty or blank', () => {
            let gameId 

            beforeEach(() => {
                gameId = randomEmptyOrBlankString()
            })

            it('should fail on an empty or blank gameId', () => {
                expect(() => retrieveGame(gameId, () => { })).to.throw(ContentError, 'id is empty or blank')
            })
        })

        describe('when gameId is not a string', () => {
            let gameId 

            beforeEach(() => {
                gameId = randomNonString()
            })

            it('should fail on a non string gameId', () => {
                expect(() => retrieveGame(gameId,  () => { })).to.throw(TypeError, `${gameId} is not an id`)
            })
        })

        describe('when gameId length is wrong', () => {
            let gameId

            beforeEach(() => {
                gameId = randomWrongLengthId()
            })

            it('should fail on a non valid gameId length', () => {
                expect(() => retrieveGame(gameId, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
            })
        })
    })
after(mongoose.disconnect)
})
