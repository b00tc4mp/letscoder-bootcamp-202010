require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomId, randomWrongLengthId, randomGameConsole, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const retrieveGameImage = require('./retrieve-game-image')
const { models: { User, Game }, mongoose } = require('gameloop-data')
const { ContentError, LengthError } = require('gameloop-errors')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')

/**
 * Retrieves a game image by its id
 * 
 * @param {string} gameId 
 * 
 * @returns {Promise} with game´s photo
 * 
 */


const { env: { MONGODB_URL } } = process

describe('retrieveGameImage()', () => {
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

            image = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))

            file = path.join(__dirname, `../data/games/${gameId}.jpg`)

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const game = { name, description, gameconsole, budget, owner, image }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id

        })
        it('shoud succed on a existing game', () => {
            return retrieveGameImage(gameId)
                .then(file => {
                    expect(file).to.be.instanceOf(Object)
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
            return retrieveGameImage(gameId)
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

                it('should fail on an empty or blank name', () =>
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(ContentError, 'id is empty or blank')
                )
            })
            describe('when id is not a string', () => {
                let gameId

                beforeEach(() => {
                    gameId = randomNonString()

                })

                it('should fail when id is not an string', () =>
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(TypeError, `${gameId} is not an id`)
                )

            })
            describe('when id lenght is not 24', () => {
                let gameId

                beforeEach(() => {
                    gameId = randomWrongLengthId()

                })

                it('should fail when id is not an string', () =>
                    expect(() => retrieveGameImage(gameId, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
                )

            })
        })

        after(mongoose.disconnect)
    })
})
