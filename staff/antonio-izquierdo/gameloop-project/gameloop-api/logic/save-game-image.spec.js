require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomGameConsole, randomNotStringNumber, randomId, randomNotId, randomWrongLengthId, randomInteger  } = require('../utils/randoms')
require('../utils/array-polyfills')
const saveGameImage = require('./save-game-image')
const { mongoose, models: { User, Game } } = require('gameloop-data')
const fs = require('fs')
const fsp = fs.promises
const path = require('path')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveGameImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, name, description, gameconsole, budget

        beforeEach(async () => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            gameconsole = randomGameConsole()
            budget = '' + randomInteger(1, 1000)

            gameImage = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            owner = '' + newUser._id

            const game = { name, description, gameconsole, budget, owner }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id
        })

        it.skip('should succeed saving the game image', () => {
            return saveGameImage(owner, gameId, gameImage)
                .then(result => {
                    expect(result).to.be.undefined

                    return fsp.access(path.join(__dirname, `../data/games/${gameId}.jpg`), fs.F_OK)
                })
        })

        afterEach(() => Promise.all([
            Game.deleteMany(),
            fsp.unlink(path.join(__dirname, `../data/games/${gameId}.jpg`))
        ]))
    })

    describe('on a non existing user', () => {
        let owner, gameImage, gameId

        beforeEach(() => {
            owner = randomId()
            gameId = randomId()
            gameImage = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))

        })

        it('shoud fail when user and game does not exists', () => {
            return saveGameImage(gameId, gameImage)

                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        })
    })

    describe('when any parameter is wrong', () => {
        describe('when gameId is wrong', () => {

            describe('when gameId is empty or blank', () => {
                let gameId, gameImage

                beforeEach(() => {
                    gameId = randomEmptyOrBlankString()
                    gameImage = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))

                })

                it('should fail on an empty or blank gameId', () =>
                    expect(() => saveGameImage(gameId, gameImage, () => { })).to.throw(ContentError, 'id is empty or blank')
                )
            })
            describe('when gameId is not a string', () => {
                let gameId, gameImage

                beforeEach(() => {
                    gameId = randomNonString()
                    gameImage = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))
                })

                it('should fail when gameId is not an string', () =>
                    expect(() => saveGameImage(gameId, gameImage, () => { })).to.throw(TypeError, `${gameId} is not an id`)
                )

            })
            describe('when gameId lenght is not 24', () => {
                let gameId, gameImage

                beforeEach(() => {
                    gameId = '5fbcd46c1cc24f9c7ce22db000'
                    gameImage = fs.createReadStream(path.join(__dirname, '../data/games/default.jpg'))
                })

                it('should fail when gameId lenght is not 24', () =>
                    expect(() => saveGameImage(gameId, gameImage, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
                )

            })
        })
        after(mongoose.disconnect)
    })
})