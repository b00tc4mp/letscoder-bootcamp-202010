const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('../errors')
const { Article, User } = require('../models')

/**
 * Retrieves an article
 * 
 * @param {string} userId 
 * 
 * @returns {Promise}
 */
module.exports = function (userId) {
    validateId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const articles = ['5fc927bdb87a0c980a11c6bf', '5fc9ec8147c1e4aa6bb54825']

            let random = Math.floor(Math.random() * articles.length)

            const articleId = articles[random]

            return Article.findById(articleId).lean()
                .then(article => {
                    if (!article) throw new NotFoundError(`user with id ${articleId} not found`)

                    const { _id } = article
                    article.id = _id.toString()

                    return article
        })
    })
}