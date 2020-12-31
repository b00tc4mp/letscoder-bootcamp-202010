require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveWorkout = require('./retrieve-workout')
const { models: { Workout }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveWorkout()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when workout exists', () => {
        let workoutIdAdvance, workoutIdBeginner, workoutIdIntermediate, levelAdvance, levelBeginner, levelIntermediate

        beforeEach(() => {
            workoutIdBeginner = '5fd24f56b252584713e17320'
            workoutIdIntermediate = '5fd24e8d28e0c746d361af52'
            workoutIdAdvance = '5fd24f11e717b546f7602b42'
            levelBeginner = 'beginner'
            levelIntermediate = 'intermediate'
            levelAdvance = 'advanced'
        })
        it('should succeed on retrieving a created workout for a beginner level', () =>
            retrieveWorkout(levelBeginner)
                .then(workout => {
                    expect(workout).to.exist
                    expect(workout.id).to.equal(workoutIdBeginner)
                    expect(workout.level).to.equal(levelBeginner)
                })
        )

        it('should succeed on retrieving a created workout for a intermediate level', () =>
            retrieveWorkout(levelIntermediate)
                .then(workout => {
                    expect(workout).to.exist
                    expect(workout.id).to.equal(workoutIdIntermediate)
                    expect(workout.level).to.equal(levelIntermediate)
                })
        )

        it('should succeed on retrieving a created workout for an advanced level', () =>
            retrieveWorkout(levelAdvance)
                .then(workout => {
                    expect(workout).to.exist
                    expect(workout.id).to.equal(workoutIdAdvance)
                    expect(workout.level).to.equal(levelAdvance)
                })
        )
    })


    describe('when level is wrong', () => {
        describe('when level is not a string', () => {
            let level

            beforeEach(() => level = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string level', () => {
                expect(() => retrieveWorkout(level, () => { })).to.throw(Error, `${level} is not a level`)
            })
        })

        describe('when level is empty or blank', () => {
            let level

            beforeEach(() => level = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank level', () => {
                expect(() => retrieveWorkout(level, () => { })).to.throw(Error, `level is empty or blank`)
            })
        })

        describe('when level is neither beginner nor intermediate nor advanced', () => {
            let level

            beforeEach(() => level = randomStringWithPrefix('beginner'))

            it('should fail on non-valid level', () => {
                expect(() => retrieveWorkout(level, () => { })).to.throw(Error, `level is neither "beginner" nor "intermediate" nor "advanced"`)
            })
        })
    })

    after(mongoose.disconnect)
})
