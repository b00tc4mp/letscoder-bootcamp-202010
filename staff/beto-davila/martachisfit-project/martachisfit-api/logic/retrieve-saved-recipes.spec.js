require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveSavedRecipes = require('./retrieve-saved-recipes')
const { models: { Recipe, User }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveSavedRecipes()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists and has chosen recipe', () => {
        let recipeId, urlPathImg, title, text, userId, fullname, email, password

        beforeEach(() => {
            urlPathImg = 'EstoEsUnaUrlAunqueNoLoParezca.es'
            title = randomStringWithPrefix('Pezado de recetón!!')
            text = randomWithPrefixAndSuffix('Esto es el inicio de una receta', 'y esto el final de la receta')
            
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.round(Math.random() * 1000)
            
            const recipe = { urlPathImg, title, text }
            const user = { fullname, email, password, calories }

            return Recipe.create(recipe)
                .then(recipe => recipeId = recipe.id)
                .then(() => {
                    return User.create(user)
                        .then(user => userId = user.id)
                })
                .then(() => {
                    return User.findByIdAndUpdate(userId, { $push: { savedRecipes: recipeId } })
                })
        })
        it('should succeed on retrieving saved recipes', () =>
            retrieveSavedRecipes(userId)
                .then(recipe => {
                    expect(recipe).to.exist
                    expect(recipe).to.be.instanceOf(Object)
                    expect(title).to.equal(title)
                    expect(text).to.equal(text)
                    expect(urlPathImg).to.equal(urlPathImg)
                })
        )

        afterEach(() => {
            User
                .findByIdAndDelete(userId)
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>

                    Recipe
                        .findByIdAndDelete(recipeId)
                        .then(result => expect(result.deletedCount).to.equal(1)))
        }
        )

        describe('when user exists but has not saved recipes', () => {
            let calories, userId, fullname, email, password

            beforeEach(() => {
                calories = Math.round(Math.random() * 1000)
                fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')

                const user = { fullname, email, password, calories }


                return User.create(user)
                    .then(user => userId = user.id)
                    .then(() =>  User.findByIdAndUpdate(userId, { $set: { savedRecipes: [] } }))
            })

            it('should succed on not showing any saved recipe', () =>
                retrieveSavedRecipes(userId)
                    .then(recipe => {
                        expect(recipe).to.be.instanceOf(Object)
                        expect(recipe.length).to.equal(0)
                    })
            )
        })

        afterEach(() => {
            User
                .findByIdAndDelete(userId)
                .then(result => expect(result.deletedCount).to.equal(1))
        }
        )
    })

    describe('when user id does not exist', () => {
        let userId

        beforeEach(() => userId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b'].random())

        it('should fail on non-existing user id', () =>
            retrieveSavedRecipes(userId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        )
    })

    describe('when user id is wrong', () => {
        describe('when user id is not a string', () => {
            let userId

            beforeEach(() => userId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string user id', () => {
                expect(() => retrieveSavedRecipes(userId, () => { })).to.throw(Error, `${userId} is not an id`)
            })
        })

        describe('when user id is empty or blank', () => {
            let userId

            beforeEach(() => userId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank user id', () => {
                expect(() => retrieveSavedRecipes(userId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when user id length is not 24', () => {
            let userId

            beforeEach(() => userId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on user id length different from 24', () => {
                expect(() => retrieveSavedRecipes(userId, () => { })).to.throw(Error, `id length ${userId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})