const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Article } } = require('martachisfit-data')

/**
 * Retrieves the articles saved by the user
 * 
 * @param {string} userId 
 * @param {string} articleId 
 * 
 * @returns {Array} Array of objects representing the saved articles
 * 
 * @throws {NotFoundError} if the article does not exist
 */

module.exports = function (userId, articleId) {
    validateId(userId)
    validateId(articleId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Article.findById(articleId).lean()
                .then(article => {
                    if (!article) throw new NotFoundError(`article with id ${articleId} not found`)

                    const { _id } = article

                    article.id = _id.toString()

                    const { id, text, title, urlPathImg } = article

                    return { id, text, title, urlPathImg }
                })
        })
}