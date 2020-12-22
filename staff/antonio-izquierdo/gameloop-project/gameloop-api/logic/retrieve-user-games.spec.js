require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomGameConsole, randomId, randomInteger, randomEmptyOrBlankString, randomNonString, randomWrongLengthId } = require('../utils/randoms')
const retrieveUserGames = require('./retrieve-user-games')
const { models: { User, Game }, mongoose } = require('gameloop-data')
const { ContentError, LengthError } = require('gameloop-errors')

const { env: { MONGODB_URL } } = process

describe('retrieveUserGames()', () => {
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

            const user = { fullname, email, password }

            const newUser = await User.create(user)
            userId = '' + newUser._id

            const game = { name, description, gameconsole, budget, owner: userId }

            const newGame = await Game.create(game)
            gameId = '' + newGame._id
        })

        it('shoud succed on a existing game', () => {
            return retrieveUserGames(userId)
                .then(game => {

                    expect(game[0].name).to.equal(name)
                    expect(game[0].description).to.equal(description)
                    expect(game[0].gameconsole).to.equal(gameconsole)
                    expect(game[0].budget).to.be.a('number')
                    expect(game[0].id).to.equal(gameId) 
                })
        })

        afterEach(() =>
            User.deleteMany().then(() => {Game.deleteMany().then(() => {})}))})

    describe('on a non existing game', () => {
        let gameId

        beforeEach(() => {

            gameId = randomId()
        })

        it('shoud fail when game does not exists', () => {
            return retrieveUserGames(gameId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`game with id ${gamesId} not found`)
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
                expect(() => retrieveUserGames(gameId, () => { })).to.throw(ContentError, 'id is empty or blank')
            })
        })

        describe('when gameId is not a string', () => {
            let gameId

            beforeEach(() => {
                gameId = randomNonString()
            })

            it('should fail on a non string gameId', () => {
                expect(() => retrieveUserGames(gameId, () => { })).to.throw(TypeError, `${gameId} is not an id`)
            })
        })

        describe('when gameId length is wrong', () => {
            let gameId

            beforeEach(() => {
                gameId = randomWrongLengthId()
            })

            it('should fail on a non valid gameId length', () => {
                expect(() => retrieveUserGames(gameId, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
            })
        })
    })
    after(mongoose.disconnect)
})
