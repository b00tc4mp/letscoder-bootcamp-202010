const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { models: { User, Article } } = require('martachisfit-data')

/**
 * Retrieves an array with the articles added by the user
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
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