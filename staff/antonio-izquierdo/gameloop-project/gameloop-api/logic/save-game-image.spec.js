require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomGameConsole, randomId, randomInteger, randomEmptyOrBlankString, randomWrongLengthId } = require('../utils/randoms')
require('../utils/array-polyfills')
const saveGameImage = require('./save-game-image')
const { models: { User, Game }, mongoose: { Types: { ObjectId } }, mongoose } = require('gameloop-data')
const saveGame = require('./save-game')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveGameImage()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, gameId, name, description, gameconsole, budget, owner

        beforeEach(async() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            gameId = randomId()
            name = randomStringWithPrefix('password')
            description = randomStringWithPrefix('description')
            gameconsole = randomGameConsole()
            budget = '' + randomInteger(1, 100)
            owner = randomId()
            
            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id
            
            const game = {gameId, name, description, gameconsole, budget, owner}

            const newGame = await Game.create(game)
            gameId = '' + newGame._id

        })

        it.skip('shoud succed on new game', () => {
            let stream = '../populate/games/default.jpg'

            saveGameImage(gameId, stream)
               
            .then(() =>
                    Game.findOne({ gameId })
                )
                .then(game => {
                    expect(game.gameId).to.equal(gameId)
                    expect(game.stream).to.equal(stream)
                })
        })

        it.skip('should succeed with undefined parameters', () => {
            saveGameImage(undefined)
                .then(game => {
                    expect(game).to.be(null)
                })
        })

        afterEach(() =>
            User.deleteMany().then(()=>
                {Game.deleteMany().then(()=>
                    {Game.deleteOne({ _id: userId })})})       
        )
    })

    describe('on a non existing user', () => {
        let stream, gameId

        beforeEach(() => {

            gameId = randomId()            
            stream = '../populate/games/default.jpg'

        })

        it.skip('shoud fail when user and pet does not exists', () => {
            saveGameImage(gameId, stream)

            .catch(error => {
                expect(error).to.be.instanceOf(Error)

                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
            
        })

    }) 

    describe('when any parameter is wrong', () => {
        describe('when gameId is wrong', () => {
            describe('when gameId is empty or blank', () => {
                let gameId, stream

                beforeEach(() => {
                    gameId = randomEmptyOrBlankString()
                    stream = '../populate/games/default.jpg'
                })

                it('should fail on an empty or blank gameId', () => {
                    expect(() => saveGameImage(gameId, stream, () => { })).to.throw(ContentError, 'id is empty or blank')
                })
            })

            describe('when gameId is not a string', () => {
                let gameId, stream

                beforeEach(() => {
                    gameId = randomNonString()
                    stream = '../populate/games/default.jpg'
                })

                it('should fail on a non string gameId', () => {
                    expect(() => saveGameImage(gameId, stream, () => { })).to.throw(TypeError, `${gameId} is not an id`)
                })
            })

            describe('when gameId length is wrong', () => {
                let gameId, stream

                beforeEach(() => {
                    gameId = randomWrongLengthId()
                    stream = '../populate/games/default.jpg'
                })

                it('should fail on a non valid gameId length', () => {
                    expect(() => saveGameImage(gameId, stream, () => { })).to.throw(`id length ${gameId.length} is not 24`)
                })
            })
        })
    })
    after(mongoose.disconnect)
})
