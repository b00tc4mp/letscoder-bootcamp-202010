require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomWrongLengthId, randomGameConsole, randomInteger} = require('../utils/randoms')
require('../utils/array-polyfills')
const retrieveGameImage = require('./retrieve-game-image')
const { models: { User, Game }, mongoose } = require('gameloop-data')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('retrieveGameImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, gameId, name, description, gameconsole, owner, userId, image

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            gameId = randomId()
            name = randomStringWithPrefix('password')
            description = randomStringWithPrefix('description')
            gameconsole = randomGameConsole()
            budget = '' + randomInteger(1, 100)
            owner = randomId()

            image = '../populate/games/default.jpg'

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id

            const game = { gameId, name, description, gameconsole, budget, owner, image }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id

        })

        it('shoud succed on a existing game', () => {
            retrieveGameImage(gameId)

                .then(result => (image).to.equal(result))

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
            retrieveGameImage(gameId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`game with id ${gameId} not found`)
                })
        })

    })

    describe('when any parameter is wrong', () => {
        describe('when id is wrong', () => {

            describe('when id is empty or blank', () => {
                let gameId

                beforeEach(() => {

                    gameId = randomEmptyOrBlankString()

                })

                it('should fail on an empty or blank id', () => {
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(ContentError, 'id is empty or blank')
                })
            })
            describe('when id is not a string', () => {
                let gameId

                beforeEach(() => {
                    gameId = randomNonString()

                })

                it('should fail when id is not an string', () => {
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(TypeError, `${gameId} is not an id`)
                })

            })
            describe('when id lenght is not 24', () => {
                let gameId

                beforeEach(() => {
                    gameId = randomWrongLengthId()

                })

                it('should fail when id is length is wrong', () => {
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
                })

            })

        })

        after(mongoose.disconnect)
    })
}) 