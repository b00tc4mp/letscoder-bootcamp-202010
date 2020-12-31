require('dotenv').config()

const { expect } = require('chai')
const { randomStringWithPrefix, randomWithPrefixAndSuffix } = require('martachisfit-utils').randoms
require('martachisfit-utils/array-polyfills')
const retrieveChosenArticle = require('./retrieve-chosen-article')
const { models: { User, Article }, mongoose } = require('martachisfit-data')

const { env: { MONGODB_URL } } = process

describe('SPEC retrieveChosenArticle()', () => {
    before(() => mongoose.connect(MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }))

    describe('when the user saved the chosen article ', () => {
        let articleId, text, title, fullname, email, password, calories, userId

        beforeEach(() => {
            title = `${randomStringWithPrefix('title')}`
            text = randomWithPrefixAndSuffix('This is the start of an article....', '....and this is the end of the article.')

            fullname = `${randomStringWithPrefix('name')} ${randomStringWithPrefix('surname')}`
            email = randomWithPrefixAndSuffix('email', '@mail.com')
            password = randomStringWithPrefix('password')
            calories = Math.floor(Math.random() * 3000)

            const article = { text, title }
            const user = { fullname, email, password, calories }

            return User.create(user)
                .then(user => userId = user.id)
                .then(() =>
                    Article.create(article)
                        .then(article => articleId = article.id))

        })
        debugger
        it('should succeed on retrieving the article by id', () =>
            retrieveChosenArticle(userId, articleId)
                .then(article => {
                    expect(article).to.exist
                    expect(article.text).to.equal(text)
                    // expect(article.title).to.equal(title)
                })
        )

        describe('when article id is wrong', () => {
            let articleId

            beforeEach(() => articleId = ['5fc0efb540493de1f5a8948a',
                '5fc0efb540493de1f5a8940c',
                '5fc0efb540493de1f5a8941b',
                '5fc0efb540493de3f5a8941b',
                '5fc0e3b540493de1f5a8941b'].random())

            it('should fail on wrong id', () =>
                retrieveChosenArticle(userId, articleId)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)

                        expect(error.message).to.equal(`article with id ${articleId} not found`)
                    })
            )
        })

        afterEach(() => {
            User
                .deleteOne({ _id: articleId })
                .then(result => expect(result.deletedCount).to.equal(1))
                .then(() =>

                    Article
                        .deleteOne({ _id: articleId })
                        .then(result => expect(result.deletedCount).to.equal(1)))
        }
        )
    })

    describe('when article id is wrong', () => {

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
        describe('when article id is not a string', () => {
            let articleId

            beforeEach(() => articleId = [true, 123, null, undefined, {}, function () { }, []].random())

            it('should fail on non-string article id', () => {
                expect(() => retrieveChosenArticle(userId, articleId, () => { })).to.throw(Error, `${articleId} is not an id`)
            })
        })

        describe('when article id is empty or blank', () => {
            let articleId

            beforeEach(() => articleId = ['', ' ', '\t', '\t', '\r'].random())

            it('should fail on empty or blank article id', () => {
                expect(() => retrieveChosenArticle(userId, articleId, () => { })).to.throw(Error, `id is empty or blank`)
            })
        })

        describe('when article id length is not 24', () => {
            let articleId

            beforeEach(() => articleId = ['a', 'b', 'c'].random().repeat(24 + (Math.random() > 0.5 ? 3 : -3)))

            it('should fail on article id length different from 24', () => {
                expect(() => retrieveChosenArticle(userId, articleId, () => { })).to.throw(Error, `id length ${articleId.length} is not 24`)
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