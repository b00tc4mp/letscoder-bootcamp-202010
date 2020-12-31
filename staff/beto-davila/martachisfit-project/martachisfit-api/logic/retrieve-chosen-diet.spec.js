require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveChosenDiet = require('./retrieve-chosen-diet')
const { models: {User, Diet}, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveChosenDiet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user exists requiring a less than 1500-calorie diet', () => {
        let fullname, email, password, calories, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = [1500, 1220, 1567, 1679, 1890].random()

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
            
        })
        it('should succeed on retrieving a chosen "keto" diet type according to user needing less than 2000 calories', () =>
            retrieveChosenDiet(userId, type='keto')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909463')
                    expect(diet.calories).to.equal(1500)
                })
        )

        it('should succeed on retrieving a chosen "vegan" diet type according to user needing less than 2000 calories', () =>
            retrieveChosenDiet(userId, type='vegan')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909469')
                    expect(diet.calories).to.equal(1500)
                })
        )

        it('should succeed on retrieving a chosen "mediterranean" diet type according to user needing less than 2000 calories', () =>
            retrieveChosenDiet(userId, type='mediterranean')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909466')
                    expect(diet.calories).to.equal(1500)
                })
        )

        afterEach(() => {
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
            }
        )
    })

    describe('when user exists requiring a diet between 2000 to less than 2500 calories', () => {
        let fullname, email, password, calories, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = [2233, 2198, 2356, 2019, 2456].random()

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
            
        })
        it('should succeed on retrieving a "keto" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='keto')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909464')
                    expect(diet.calories).to.equal(2000)
                })
        )

        it('should succeed on retrieving a "vegan" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='vegan')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd4571990946a')
                    expect(diet.calories).to.equal(2000)
                })
        )

        it('should succeed on retrieving a "mediterranean" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='mediterranean')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909467')
                    expect(diet.calories).to.equal(2000)
                })
        )

        afterEach(() => {
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
            }
        )
    })

    describe('when user exists requiring a diet greater than 2500 calories', () => {
        let fullname, email, password, calories, userId

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = [2533, 2798, 2856, 3000, 2890].random()

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
            
        })
        it('should succeed on retrieving a "keto" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='keto')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909465')
                    expect(diet.calories).to.equal(2500)
                })
        )

        it('should succeed on retrieving a "vegan" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='vegan')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd4571990946b')
                    expect(diet.calories).to.equal(2500)
                })
        )

        it('should succeed on retrieving a "mediterranean" diet type according to user required calories', () =>
            retrieveChosenDiet(userId, type='mediterranean')
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                    expect(diet._id.toString()).to.equal('5fcdf030c36fd45719909468')
                    expect(diet.calories).to.equal(2500)
                })
        )

        afterEach(() => {
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
            }
        )
    })

    describe('when diet type is wrong', () => {

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
        describe('when diet type is not a string', () => {
            let dietType

            beforeEach(() => dietType = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string type of diet', () => {
                expect(() => retrieveChosenDiet(userId, dietType, () => { })).to.throw(Error, `${dietType} is not a diet type`)
            })
        })

        describe('when dietType is empty or blank', () => {
            let dietType

            beforeEach(() => dietType = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank diet type', () => {
                expect(() => retrieveChosenDiet(userId, dietType, () => { })).to.throw(Error, `diet type is not "vegan" or "mediterranean" or "keto"`)
            })
        })

        describe('when diet type is not a string', () => {
            let dietType

            beforeEach(() => dietType = randomNonString())

            it('should fail on non-string type of diet', () => {
                expect(() => retrieveChosenDiet(userId, dietType, () => { })).to.throw(Error, `${dietType} is not a diet`)
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