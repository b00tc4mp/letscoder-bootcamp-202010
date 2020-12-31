require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
const addFoodUserDiet = require('./add-food-user-diet')
const { models: { User, Food }, mongoose } = require('martachisfit-data')


const { env: { MONGODB_URL } } = process

describe('SPEC addFoodUserDiet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user and food exist', () => {
        let fullname, email, password, calories, name, serving, carbs, protein, fats, userId, foodId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            name = randomStringWithPrefix('comida')
            calories = Math.floor(Math.random() * 500)
            serving = Math.floor(Math.random() * 10)
            carbs = Math.floor(Math.random() * 100)
            protein = Math.floor(Math.random() * 100)
            fats = Math.floor(Math.random() * 100)

            const food = { name, calories, serving, carbs, protein, fats }
            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
                .then(() =>
                    Food.create(food)
                        .then(food => foodId = food.id))
        })
        it('should succeed on adding a chosen food', () =>
            addFoodUserDiet(userId, foodId)
                .then(() => Food.findOne({ _id: foodId }))
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

        afterEach(() => {
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>

                    Food
                        .deleteOne({ _id: foodId })
                        .then(result => expect(result.deletedCount).to.equal(1)))
        }
        )
    })

    describe('when user exists but food does not', () => {
        let fullname, email, password, calories, userId, foodId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            foodId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b', '5fc0efb541493de1f5a8941b'].random()

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
        })

        it('should fail adding a non existing food', () =>
            addFoodUserDiet(userId, foodId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`food with id ${foodId} not found`)
                })
        )

        afterEach(() =>
            User
                .deleteOne({ email, password })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when food exists but user does not', () => {
        let calories, userId, foodId, name, serving, carbs, protein, fats

        beforeEach(() => {
            name = randomStringWithPrefix('comida')
            calories = Math.floor(Math.random() * 500)
            serving = Math.floor(Math.random() * 10)
            carbs = Math.floor(Math.random() * 100)
            protein = Math.floor(Math.random() * 100)
            fats = Math.floor(Math.random() * 100)

            const food = { name, calories, serving, carbs, protein, fats }

            userId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b', '5fc0efb541493de1f5a8941b'].random()

            return Food.create(food)
                .then(food => foodId = food.id)
        })

        it('should fail adding food on a non-registered user', () =>
            addFoodUserDiet(userId, foodId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)

                    expect(error.message).to.equal(`user with id ${userId} not found`)
                })
        )

        afterEach(() =>
            Food
                .deleteOne({ _id: foodId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when food id is not valid', () => {
        let fullname, email, password, calories, userId

        beforeEach(() => {

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)

        })

        describe('when food id is not a string', () => {
            let foodId

            beforeEach(() => foodId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string food id', () => {
                expect(() => addFoodUserDiet(userId, foodId, () => { })).to.throw(Error, `${foodId} is not an id`)
            })
        })

        describe('when food id is empty or blank', () => {
            let foodId

            beforeEach(() => foodId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank food id', () => {
                expect(() => addFoodUserDiet(userId, foodId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when food id does not have a valid length', () => {
            let foodId

            beforeEach(() => foodId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on non 24 digits length', () => {
                expect(() => addFoodUserDiet(userId, foodId, () => { })).to.throw(Error, `id length ${foodId.length} is not 24`)
            })
        })
        afterEach(() => {
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
        }
        )
    })
    after(mongoose.disconnect)
})