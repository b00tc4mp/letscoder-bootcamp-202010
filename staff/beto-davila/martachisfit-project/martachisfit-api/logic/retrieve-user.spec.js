require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveUser = require('./retrieve-user')
const { models: { User }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveUser()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when user already exists', () => {
        let userId, fullname, email, password, calories

        beforeEach(() => {
            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
        })

        it('should succeed on correct user id', () =>
            retrieveUser(userId)
                .then(user => {
                    expect(user).to.exist
                    expect(user.fullname).to.equal(fullname)
                    expect(user.email).to.equal(email)
                    expect(user.password).to.be.undefined
                    expect(user.calories).to.equal(calories)
                })
        )

        describe('when user id does not exist', () => {
            let userId

            beforeEach(() => userId = ['5fc0efb540493de1f5a8948a', '5fc0efb540493de1f5a8940c', '5fc0efb540493de1f5a8941b'].random())

            it('should fail on wrong user id', () =>
                retrieveUser(userId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`user with id ${userId} not found`)
                    })
            )
        })

        afterEach(() =>
            User
                .deleteOne({ _id: userId })
                .then(result => expect(result.deletedCount).to.equal(1))
        )
    })

    describe('when user id is wrong', () => {
        describe('when user id is not a string', () => {
            let userId

            beforeEach(() => userId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string user id', () => {
                expect(() => retrieveUser(userId, () => { })).to.throw(Error, `${userId} is not an id`)
            })
        })

        describe('when user id is empty or blank', () => {
            let userId

            beforeEach(() => userId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank user id', () => {
                expect(() => retrieveUser(userId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when user id length is not 24', () => {
            let userId

            beforeEach(() => userId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on user id length different from 24', () => {
                expect(() => retrieveUser(userId, () => { })).to.throw(Error, `id length ${userId.length} is not 24`)
            })
        })
    })

    after(mongoose.disconnect)
})