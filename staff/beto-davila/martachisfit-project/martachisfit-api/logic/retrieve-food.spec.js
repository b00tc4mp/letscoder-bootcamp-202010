require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveFood = require('./retrieve-food')
const { models: { Food }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveFood()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when food exists', () => {
        let foodId, name, calories, serving, carbs, protein, fats

        beforeEach(() => {
            name = `${randomStringWithPrefix('patata')}`
            serving = Math.round(Math.random() * 100)
            calories = Math.round(Math.random() * 1000)
            carbs = Math.round(Math.random() * 100)
            protein = Math.round(Math.random() * 100)
            fats = Math.round(Math.random() * 100)

            const food = { name, calories, serving, carbs, protein, fats }
            return Food.create(food)
                .then(food => foodId = food.id)
        })
        it('should succeed on retrieving food', () =>
            retrieveFood(foodId)
                .then(food => {
                    expect(food).to.exist
                    expect(food.name).to.equal(name)
                    expect(food.serving).to.equal(serving)
                    expect(food.calories).to.equal(calories)
                    expect(food.carbs).to.equal(carbs)
                    expect(food.protein).to.equal(protein)
                    expect(food.fats).to.equal(fats)
                })
        )

        describe('when food id does not exist', () => {
            let foodId

            beforeEach(() => foodId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b'].random())

            it('should fail on non-existing food id', () =>
                retrieveFood(foodId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`food with id ${foodId} not found`)
                    })
            )
        })

        afterEach(() =>
            Food
                .deleteOne({ _id: foodId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when food id is wrong', () => {
        describe('when food id is not a string', () => {
            let foodId

            beforeEach(() => foodId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string food id', () => {
                expect(() => retrieveFood(foodId, () => { })).to.throw(Error, `${foodId} is not an id`)
            })
        })

        describe('when food id is empty or blank', () => {
            let foodId

            beforeEach(() => foodId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank food id', () => {
                expect(() => retrieveFood(foodId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when food id length is not 24', () => {
            let foodId

            beforeEach(() => foodId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on food id length different from 24', () => {
                expect(() => retrieveFood(foodId, () => { })).to.throw(Error, `id length ${foodId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})