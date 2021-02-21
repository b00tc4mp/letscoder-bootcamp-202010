require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const findFood = require('./find-food')
const { models: { Food }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC findFood()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when food already exists', () => {
        let foodId, name, calories, serving, carbs, protein, fats, query

        beforeEach(() => {
            name = `${randomStringWithPrefix('name')}`
            serving = Math.round(Math.random() * 100)
            calories = Math.round(Math.random() * 1000)
            carbs = Math.round(Math.random() * 100)
            protein = Math.round(Math.random() * 100)
            fats = Math.round(Math.random() * 100)
            query = name

            const food = { name, calories, serving, carbs, protein, fats }
            
            return Food.create(food)
                .then(food => foodId = food._id)
        })
        it('should succeed on find the food by query', () =>
            findFood(query)
                .then(food => {
                    expect(food).to.exist
                    expect(food[0].name).to.equal(name)
                    expect(food[0].calories).to.equal(calories)
                    expect(food[0].serving).to.equal(serving)
                    expect(food[0].carbs).to.equal(carbs)
                    expect(food[0].protein).to.equal(protein)
                    expect(food[0].fats).to.equal(fats)
                })
        )

        describe('when food does not exist', () => {
            let query

            beforeEach(() => query = ['unacomidainventada', '123123123', 'otroalimentoquenocomeria', 'siexisteestacomidaquevengadiosylovea'].random())

            it('should succeed on showing no results', () =>
                findFood(query)
                    .then(result => {
                        expect(result).to.exist
                        expect(result.length).to.equal(0)
                    })
            )
        })
        afterEach(() =>
            Food
                .deleteOne({ _id: foodId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when query is not correct', () => {
        describe('when query is empty or blank', () => {
            let query

            beforeEach(() => query = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank query', () => {
                expect(() => findFood(query, () => { })).to.throw(Error, 'query is empty or blank')
            })
        })
    })
    after(mongoose.disconnect)
})