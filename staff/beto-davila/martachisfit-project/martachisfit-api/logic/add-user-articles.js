const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Article, User }, mongoose: { Types: { ObjectId } } } = require('martachisfit-data')

/**
 * Adds a blog article for the user to read later
 * 
 * @param {string} userId user's id
 * @param {string} articleId article's item id
 * 
 * @returns {undefined}
 * 
 * @throws {NotFoundError} on not found userId
 * @throws {NotFoundError} on non-existent articleId
 */

module.exports = (userId, articleId) => {
    validateId(userId)
    validateId(articleId)

    return User.findOne({ _id: ObjectId(userId) })
        .then(user => {

            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const { _id } = user

            let { savedArticles } = user

            user = { userId: _id, savedArticles: [] }

            return Article.findOne({ _id: ObjectId(articleId) })
                .then(article => {

                    if (!article) throw new NotFoundError(`article with id ${articleId} not found`)

                    if (savedArticles.length) {
                        const index = savedArticles.findIndex(article => article.toString() === articleId)

                        index < 0 ? savedArticles.push(ObjectId.createFromHexString(articleId)) : savedArticles.splice(index, 1)

                        return User.updateOne({ _id }, { $set: { savedArticles } })
                            .then(result => { })

                    } else {
                        savedArticles.push(ObjectId.createFromHexString(articleId))

                        return User.updateOne({ _id }, { $set: { savedArticles } })
                            .then(result => { })
                    }

                })
        })
}