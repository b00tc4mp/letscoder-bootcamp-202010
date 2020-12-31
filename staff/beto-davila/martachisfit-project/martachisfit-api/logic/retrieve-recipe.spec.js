require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveRecipe = require('./retrieve-recipe')
const { models: { Recipe }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveRecipe()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when recipe exists', () => {
        let recipeId, urlPathImg, title, text

        beforeEach(() => {
            urlPathImg = 'EstoEsUnaUrlAunqueNoLoParezca.es'
            title = randomStringWithPrefix('Pezado de recetón!!')
            text = randomWithPrefixAndSuffix('Esto es el inicio de una receta', 'y esto el final de la receta')

            const recipe = { urlPathImg, title, text }

            return Recipe.create(recipe)
                .then(recipe => recipeId = recipe.id)

        })

        it('should retrieve the recipe by id', () =>
            retrieveRecipe(recipeId)
                .then(recipe => {
                    expect(recipe).to.exist

                    expect(recipe.text).to.equal(text)
                    expect(recipe.title).to.equal(title)
                    expect(recipe.urlPathImg).to.equal(urlPathImg)
                })
        )

        describe('when recipe does not exist', () => {
            let recipeId

            beforeEach(() => recipeId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b'].random())

            it('should fail on wrong user id', () =>
                retrieveRecipe(recipeId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`recipe with id ${recipeId} not found`)
                    })
            )
        })

        afterEach(() => {
            Recipe
                .deleteOne({ _id: recipeId })
                .then(result => expect(result.deletedCount).to.equal(1))
        }
        )
    })

    describe('when recipe id is wrong', () => {
        describe('when recipe id is not a string', () => {
            let recipeId

            beforeEach(() => recipeId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string recipe id', () => {
                expect(() => retrieveRecipe(recipeId, () => { })).to.throw(Error, `${recipeId} is not an id`)
            })
        })

        describe('when recipe id is empty or blank', () => {
            let recipeId

            beforeEach(() => recipeId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank recipe id', () => {
                expect(() => retrieveRecipe(recipeId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when recipe id length is not 24', () => {
            let recipeId

            beforeEach(() => recipeId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on recipe id length different from 24', () => {
                expect(() => retrieveRecipe(recipeId, () => { })).to.throw(Error, `id length ${recipeId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})