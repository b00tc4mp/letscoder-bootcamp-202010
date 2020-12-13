require('dotenv').config()
const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString } = require('../utils/randoms')
const { Types: { ObjectId } } = mongoose
const saveGame = require('./save-game')
const { User, Game } = require('../models')
const { ContentError } = require('../errors')
const game = require('../models/schemas/game')

const { env: { MONGODB_URL } } = process

describe('saveGame()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let fullname, email, password, ownerId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => ownerId = user.id)
        })

        describe('when user doesn\'t have games', () => {
            let  name, description, gameconsole, budget

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = 'nintendo ds'
                budget = '100'
            })

            it('should succeed creating a new game', () =>
            //gameId, name, description, gameconsole, budget, ownerId
                saveGame(undefined, name, description, gameconsole, budget, ownerId)
                    .then(gameId => {
                        console.log('gameId: ',{gameId})
                        expect(ObjectId.isValid(gameId)).be.true

                        return Game.find({ owner: ownerId })
                    })
                    .then(games => {
                        expect(games).to.have.lengthOf(1)

                        const [game] = games

                        expect(game.name).to.equal(name)
                        expect(game.description).to.equal(description)
                        expect(game.gameconsole).to.equal(gameconsole)
                        expect(game.budget).to.be.a('number')
                    })
            )

            afterEach(() => Game.deleteMany())
        })

        describe('when user already has games', () => {
            let name, description, gameconsole, budget

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = 'nintendo ds'
                budget = '100'
            })

            it('should succeed updating the game', () => {
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = 'nintendo ds'
                budget = '100'
                

                return saveGame(undefined, name, description, gameconsole, budget, ownerId)
                    .then(gameId => {
                        console.log('gameId: ', {gameId})
                        expect(ObjectId.isValid(gameId)).be.true

                        return Game.find({ owner: ownerId })
                    })
                    .then(games => {
                        console.log('games: ', games)
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
        
        describe('when user note does not exist (it was removed from db)', () => {
            let gameId, name, description, gameconsole, budget

            beforeEach(() => {
                gameId = '5fbcd46c1cc24f9c7ce22db0'
                name = randomStringWithPrefix('name')
                description = randomStringWithPrefix('description')
                gameconsole = 'nintendo ds'
                budget = '100'
            })

            it('should fail on trying to update a game that does not exist any more', () =>
                saveGame(gameId, name, description, gameconsole, budget, ownerId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`game with id ${gameId} not found`)
                    })
            )
        })

        afterEach(() => User.deleteMany())
    })

    describe('when user does not exist', () => {
        let name, description, gameconsole, budget, ownerId

        beforeEach(() => {
            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            gameconsole = 'nintendo ds'
            budget = '100'
            ownerId = '5fbcd46c1cc24f9c7ce22db1'
        })

        it('should fail alerting user with message: "id does not exist"', () =>
            saveGame(undefined, name, description, gameconsole, budget, ownerId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${ownerId} not found`)
                })
        )
    })

    describe('when any parameter is wrong', () => {

        //gameId, name, description, gameconsole, budget, ownerId

        describe('when name is wrong', () => {
            describe('when name is not a string', () => {
                let name, description, gameconsole, budget

                beforeEach(() => {
                    name = randomNonString()
                    description = randomStringWithPrefix('password')
                    gameconsole = randomGameConsole()
                    budget = randomStringWithPrefix('password')
                })

                console.log('random gameconsole: ', gameconsole)

                it('should fail on a non string name', () => {
                    expect(() => saveGame(undefined, name, description, gameconsole, budget, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when name is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank name', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })
        })

        describe('when description is wrong', () => {
            describe('when description is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomNonString()
                })

                it('should fail on empty or blank description', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${password} is not a password`)
                })
            })

            describe('when description is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomWithPrefixAndSuffix('email', '@mail.com')
                    password = randomEmptyOrBlankString()
                })

                it('should fail on non-string description', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'password is empty or blank')
                })
            })
        })

        describe('when gameconsole is wrong', () => {
            describe('when gameconsole is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on a non string gameconsole', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when gameconsole is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank gameconsole', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })
        })

        describe('when budget is wrong', () => {
            describe('when budget is not a string', () => {
                let email, password

                beforeEach(() => {
                    email = randomNonString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on a non string budget', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(TypeError, `${email} is not an e-mail`)
                })
            })

            describe('when budget is empty or blank', () => {
                let email, password

                beforeEach(() => {
                    email = randomEmptyOrBlankString()
                    password = randomStringWithPrefix('password')
                })

                it('should fail on an empty or blank budget', () => {
                    expect(() => authenticateUser(email, password, () => { })).to.throw(ContentError, 'e-mail is empty or blank')
                })
            })
        })
    })

    // TODO more unit test cases

    after(mongoose.disconnect)
}) 