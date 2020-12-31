require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveMuscularGroup = require('./retrieve-muscular-group')
const { models: { Movement }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveMuscularGroup()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when muscle group exists', () => {
        let name, group, urlPathImg, movementId

        beforeEach(() => {
            name = randomStringWithPrefix('...en banco inclinado')
            group = ['pierna', 'hombro', 'biceps', 'triceps', 'espalda', 'gemelo', 'pectoral', 'abdomen'].random()
            urlPathImg = 'aquiVaUnaUrlqueExiste.es'

            const movement = { name, group, urlPathImg }

            return Movement.create(movement)
                .then(movement => movementId = movement.id)

        })
        it('should succeed on retrieving a chosen muscle movement by group', () =>
            retrieveMuscularGroup(group)
                .then(movement => {
                    expect(movement).to.exist
                    expect(movement).to.be.instanceOf(Array)
                })
        )

        afterEach(() => {
            Movement
                .deleteOne({ _id: movementId })
                .then(result => expect(result.deletedCount).to.equal(1))
        }
        )
    })

    describe('when muscle group is wrong', () => {
        describe('when muscle group is not a string', () => {
            let group

            beforeEach(() => group = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string type of diet', () => {
                expect(() => retrieveMuscularGroup(group, () => { })).to.throw(Error, `${group} is not a group`)
            })
        })

        describe('when group is empty or blank', () => {
            let group

            beforeEach(() => group = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank group', () => {
                expect(() => retrieveMuscularGroup(group, () => { })).to.throw(Error, 'group is empty or blank')
            })
        })

        describe('when group does not belong to the model', () => {
            let group

            beforeEach(() => group = randomStringWithPrefix('biceps'))

            it('should fail on non-existing muscle group', () => {
                expect(() => retrieveMuscularGroup(group, () => { })).to.throw(Error, `Invalid muscular group`)
            })
        })
    })

    after(mongoose.disconnect)
})