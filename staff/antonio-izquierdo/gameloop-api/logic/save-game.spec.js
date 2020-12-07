/* require('dotenv').config()

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString, randomEmptyOrBlankString, randomInteger } = require('../utils/randoms')
require('../utils/array-polyfills')
const saveGame = require('./save-game')
const { User, Game } = require('../models')
const { ContentError } = require('../errors')

const { env: { MONGODB_URL } } = process

//gameId, name, description, gameconsole, budget, ownerId
describe('savegame()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('on existing user', () => {
        let fullname, email, password, name, description, gameconsole, budget

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            name = randomStringWithPrefix('name')
            description = randomStringWithPrefix('description')
            gameconsole = randomGameConsole()
            budget = randomNotNumber()

            const user = { fullname, email, password }

            return User.create(user)
                .then(user => userId = user.id)
        })

        it('shoud succed on new game', () => {
            saveGame(undefined, name, description, gameconsole, budget)

                .then(() =>
                    Game.findOne({ name })
                )
                .then(game => {
                    expect(game).to.exist
                    expect(game.name).to.equal(name)
                    expect(game.breed).to.equal(breed)
                    expect(game.description).to.equal(description)
                    expect(game.color).to.equal(color)
                })
        })

        afterEach(() =>
            User
                .deleteOne({ fullname, email })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(Game
                    .deleteOne({undefined, name, description, gameconsole, budget })
                    .then(result => expect(result.deletedCount).to.equal(1))
                )
        )
    })

    describe('on a non existing user', () => {
        let name, breed, species, color, description, shelter

        beforeEach(() => {

            name = randomStringWithPrefix('name')
            breed = randomStringWithPrefix('breed')
            species = 'dog'
            color = randomStringWithPrefix('color')
            description = randomStringWithPrefix('description')
            shelter = '5fbcd46c1cc24f9c7ce22db1'


        })

        it('shoud fail when user does not exists', () => {
            saveGame(undefined, name, breed, species, color, description, userId)

                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })

        })

    })

    describe('when any parameter is wrong', () => {

        describe('when name is wrong', () => {
            describe('when name is empty or blank', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomEmptyOrBlankString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')

                })

                it('should fail on an empty or blank name', () => {
                    expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(ContentError, 'name is empty or blank')
                })
            })

            describe('when name is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    fullname = randomNonString()
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when name is not an string', () => {
                    expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${name} is not a name`)
                })
            })
        })


        describe('when breed is wrong', () => {
            describe('when breed is empty or blank', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomEmptyOrBlankString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail on an empty or blank breed', () => {
                    expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(ContentError, 'breed is empty or blank')
                })
            })

            describe('when breed is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomNonString()
                    species = 'cat'
                    color = randomStringWithPrefix('color')
                    description = randomStringWithPrefix('description')
                })

                it('should fail when breed is not an string', () => {
                    expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${breed} is not a breed`)
                })
            })
        })

        describe('when color is wrong', () => {

            describe('when color is not a string', () => {
                let name, breed, species, color, description

                beforeEach(() => {
                    name = randomStringWithPrefix('name')
                    breed = randomStringWithPrefix('breed')
                    species = 'cat'
                    color = randomNonString()
                    description = randomStringWithPrefix('description')
                })

                it('should fail when color is not an string', () => {
                    expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${color} is not a color`)
                })
            })
        })

        describe('when description is not a string', () => {
            let name, breed, species, color, description

            beforeEach(() => {
                name = randomStringWithPrefix('name')
                breed = randomStringWithPrefix('breed')
                species = 'cat'
                color = randomStringWithPrefix('color')
                description = randomNonString()
            })

            it('should fail when description is not an string', () => {
                expect(() => saveGame(undefined, name, breed, species, color, description, () => { })).to.throw(TypeError, `${description} is not a description`)
            })
        })
    })
    after(mongoose.disconnect)
}) */