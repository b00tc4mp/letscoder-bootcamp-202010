require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveSavedFood = require('./retrieve-saved-food')
const { models: { Food, User }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveSavedFood()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists and has chosen food', () => {
        let foodId, name, calories, serving, carbs, protein, fats, userId, fullname, email, password, chosenFoods

        beforeEach(() => {
            name = `${randomStringWithPrefix('banana')}`
            serving = Math.round(Math.random() * 100)
            calories = Math.round(Math.random() * 1000)
            carbs = Math.round(Math.random() * 100)
            protein = Math.round(Math.random() * 100)
            fats = Math.round(Math.random() * 100)

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')

            const user = { fullname, email, password, calories }

            const food = { name, calories, serving, carbs, protein, fats }

            return Food.create(food)
                .then(food => foodId = food.id)
                .then(() => {
                    return User.create(user)
                        .then(user => userId = user.id)
                })
                .then(() => {
                    return User.findByIdAndUpdate(userId, { $push: { chosenFoods: foodId } })
                })
        })
        debugger
        it('should succeed on retrieving chosen foods', () =>
            retrieveSavedFood(userId)
                .then(food => {
                    expect(food).to.exist
                    expect(food).to.be.instanceOf(Object)
                    expect(name).to.equal(name)
                    expect(calories).to.equal(calories)
                    expect(serving).to.equal(serving)
                    expect(carbs).to.equal(carbs)
                    expect(protein).to.equal(protein)
                    expect(fats).to.equal(fats)
                })
        )

        afterEach(() => {
            User
                .findByIdAndDelete(userId)
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>

                    Food
                        .findByIdAndDelete(foodId)
                        .then(result => expect(result.deletedCount).to.equal(1)))
        }
        )

        describe('when user exists but has not chosen food', () => {
            let calories, userId, fullname, email, password

            beforeEach(() => {
                calories = Math.round(Math.random() * 1000)
                fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
                email = randomWithPrefixAndSuffix('email', '@mail.com')
                password = randomStringWithPrefix('password')

                const user = { fullname, email, password, calories }


                return User.create(user)
                    .then(user => userId = user.id)
                    .then(() =>  User.findByIdAndUpdate(userId, { $set: { chosenFoods: [] } }))
            })

            it('should succed on not showing any food', () =>
                retrieveSavedFood(userId)
                    .then(food => {
                        expect(food).to.be.instanceOf(Object)
                        expect(food.length).to.equal(0)
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
            retrieveSavedFood(userId)
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
                expect(() => retrieveSavedFood(userId, () => { })).to.throw(Error, `${userId} is not an id`)
            })
        })

        describe('when user id is empty or blank', () => {
            let userId

            beforeEach(() => userId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank user id', () => {
                expect(() => retrieveSavedFood(userId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when user id length is not 24', () => {
            let userId

            beforeEach(() => userId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on user id length different from 24', () => {
                expect(() => retrieveSavedFood(userId, () => { })).to.throw(Error, `id length ${userId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})