require('dotenv').config()

const { expect } = require('chai')
const mongoose = require('mongoose')
const { randomStringWithPrefix, randomWithPrefixAndSuffix, randomNonString } = require('../utils/randoms')
require('../utils/array-polyfills')
const retrieveChosenDiet = require('./retrieve-chosen-diet')
const { User, Diet } = require('../models')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveChosenDiet()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user and chosen diet exists', () => {
        let dietId, fullname, email, password, calories, userId, type, meals, macros

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            type = ['keto', 'mediterranean', 'vegan'].random()
            meals = {
                meal1: 'meal1',
                meal2: 'meal2',
                meal3: 'meal3',
                meal4: 'meal4'
            }
            macros = {
                carbs:'xx%',
                fats: 'xx%',
                protein: 'xx%'
            }

            const diet = { type, calories, meals, macros }
            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
                .then(() =>  
                    Diet.create(diet)
                        .then(diet => dietId = diet.id))
            
        })
        debugger
        it('should succeed on retrieving the chosen diet by type', () =>
            retrieveChosenDiet(userId, type)
                .then(diet => {
                    expect(diet).to.exist
                    expect(diet.type).to.equal(type)
                })
        )

        // describe('when the type of diet is neither mediterranean nor vegan nor keto', () => {
        //     let dietType

        //     beforeEach(() => dietType = ['alcahofaDiet', 
        //                                     'pepinoDiet', 
        //                                     'bananaDiet', 
        //                                     'pepigriDiet',
        //                                     'cualquiertipodedietaquenoexista'].random())

        //     it('should fail on wrong diet type', () =>
        //         retrieveChosenDiet(userId, dietType)
        //             .catch(error => {
        //                 expect(error).to.be.instanceOf(Error)
        //                 debugger
        //                 expect(error.message).to.equal('diet type is not "vegan" or "mediterranean" or "keto"')
        //             })
        //     )
        // })

        afterEach(() => {
            User
                .deleteOne({ _id: dietId })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() => 

                 Diet
                    .deleteOne({ _id: dietId })
                    .then(result => expect(result.deletedCount).to.equal(1)))
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