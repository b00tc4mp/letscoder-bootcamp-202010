require('dotenv').config()
const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomGameConsole, randomNotStringNumber, randomId, randomNotId, randomWrongLengthId, randomInteger } = require('../utils/randoms')
const { models: { User, Game }, mongoose: { Types: { ObjectId } }, mongoose } = require('gameloop-data')
const saveGame = require('./save-game')
const { ContentError, LengthError } = require('../errors')

const { env: { MONGODB_URL } } = process

describe('saveGame()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })
        describe('when user doesn\'t have games', () => {
            let name, description, gameconsole, budget

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = randomGameConsole()
                budget = '' + randomInteger(1, 100)
            })

            it('should succeed creating a new game', () => {
                return saveGame(undefined, name, description, gameconsole, budget, userId)
                    .then(gameId => {

                        expect(ObjectId.isValid(gameId)).be.true

                        return Game.find({ owner: userId })
                    })
                    .then(games => {
                        expect(games).to.have.lengthOf(1)

                        const [game] = games

                        expect(game.name).to.equal(name)
                        expect(game.description).to.equal(description)
                        expect(game.gameconsole).to.equal(gameconsole)
                        expect(game.budget).to.be.a('number')
                    })
            })

            afterEach(() => Game.deleteMany())
        })

        describe('when user already has games', () => {
            let name, description, gameconsole, budget, gameId

            beforeEach(() => {
                fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')

                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = randomGameConsole()
                budget = '' + randomInteger(1, 100)

                const user = { fullname, email, password }

                User.create(user)
                    .then(user => userId = user.id)
                    .then(Game.create({ name, description, gameconsole, budget, owner: userId })
                        .then(game => gameId = game._id))
            })

            it('should succeed updating the game', () => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = randomGameConsole()
                budget = '' + randomInteger(1, 100)


                return saveGame(gameId, name, description, gameconsole, budget, userId)
                    .then(gameId => {
                        expect(ObjectId.isValid(gameId)).be.true

                        return Game.findById({ _id: gameId })
                            .then(game => {
                                expect(game.name).to.equal(name)
                                expect(game.description).to.equal(description)
                                expect(game.gameconsole).to.equal(gameconsole)
                                expect(game.budget).to.be.a('number')
                            })
                    })
            })
        })

        describe('when user`s game does not exist (it was removed from db)', () => {
            let gameId, name, description, gameconsole, budget

            beforeEach(() => {
                gameId = randomId()
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = randomGameConsole()
                budget = '' + randomInteger(1, 100)
            })

            it('should fail on trying to update a game that does not exist any more', () => {
                return saveGame(undefined, name, description, gameconsole, budget, userId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`game with id ${gameId} not found`)
                    })
            })

            afterEach(() => Game.deleteMany())
        })
        describe('when user does not exist', () => {
            let name, description, gameconsole, budget, userId

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = randomGameConsole()
                budget = '' + randomInteger(1, 100)
                userId = randomId()
            })

            it('should fail alerting user with message: "id does not exist"', () => {
                return saveGame(undefined, name, description, gameconsole, budget, userId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`user with id ${userId} not found`)
                    })
            })
        })

        afterEach(() => User.deleteMany())
    })


    describe('when any parameter is wrong', () => {
        describe('when name is wrong', () => {
            describe('when name is not a string', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomNonString()
                    description = randomStringWithPrefix('password')
                    gameconsole = randomGameConsole(gameconsole)
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on a non string name', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${name} is not a text`)
                })
            })

            describe('when name is empty or blank', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomEmptyOrBlankString()
                    description = randomStringWithPrefix('password')
                    gameconsole = randomGameConsole(gameconsole)
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(ContentError, 'text is empty or blank')
                })
            })
        })

        describe('when description is wrong', () => {
            describe('when description is not a string', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomNonString()
                    gameconsole = randomGameConsole(gameconsole)
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on a non string description', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${description} is not a text`)
                })
            })

            describe('when description is empty or blank', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomEmptyOrBlankString()
                    gameconsole = randomGameConsole(gameconsole)
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on non-string description', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(ContentError, 'text is empty or blank')
                })
            })
        })

        describe('when gameconsole is wrong', () => {
            describe('when gameconsole is not a string', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomNonString()
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on a non string gameconsole', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${gameconsole} is not an string`)
                })
            })

            describe('when gameconsole is empty or blank', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomEmptyOrBlankString()
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on an empty or blank gameconsole', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(ContentError, 'gameconsole is empty or blank')
                })
            })

            describe('when gameconsole is not a valid gameconsole', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomStringWithPrefix('gameconsole')
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on a non valid gameconsole', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${gameconsole} is not a valid gameconsole`)
                })
            })
        })

        describe('when budget is wrong', () => {
            describe('when budget is negative number', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(-1, -100)
                    userId = randomId()
                })

                it('should fail on a negative number for budget', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(ContentError, `${budget} is a negative number`)
                })
            })

            describe('when budget is not a number', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomGameConsole()
                    budget = randomNotStringNumber()
                    userId = randomId()
                })

                it('should fail on a non number budget', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${budget} is not a number`)
                })
            })

            describe('when budget is empty or blank', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomGameConsole()
                    budget = randomEmptyOrBlankString()
                    userId = randomId()
                })

                it('should fail on an empty or blank budget', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(ContentError, 'price is empty or blank')
                })
            })
        })
    })

    describe('when any Id is wrong', () => {
        describe('when Id is not a valid Id', () => {
            describe('when gameId is not an Id', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomNotId()
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('password')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail when gameId is not an id', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${gameId} is not an id`)
                })
            })

            describe('when userId is not an Id', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('name')
                    description = randomStringWithPrefix('password')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 100)
                    userId = randomNotId()
                })

                it('should fail when userId is not an id', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(TypeError, `${userId} is not an id`)
                })
            })
        })

        describe('when Id length is wrong', () => {
            describe('when gameId has an invalid length', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomWrongLengthId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 100)
                    userId = randomId()
                })

                it('should fail on a non valid gameId length', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(LengthError, `id length ${gameId.length} is not 24`)
                })
            })

            describe('when userId has an invalid length', () => {
                let gameId, name, description, gameconsole, budget, userId

                beforeEach(() => {
                    gameId = randomId()
                    name = randomStringWithPrefix('password')
                    description = randomStringWithPrefix('description')
                    gameconsole = randomGameConsole()
                    budget = '' + randomInteger(1, 100)
                    userId = randomWrongLengthId()
                })

                it('should fail on a non valid userId length', () => {
                    expect(() => saveGame(gameId, name, description, gameconsole, budget, userId, () => { })).to.throw(LengthError, `id length ${userId.length} is not 24`)
                })
            })
        })
    })
    after(mongoose.disconnect)
}) 