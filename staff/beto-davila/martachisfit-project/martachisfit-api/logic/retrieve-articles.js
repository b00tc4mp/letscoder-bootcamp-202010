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

            const articles = ['5fd1e9c33cb70e2db49c220a', '5fc927bdb87a0c980a11c6bf', '5fc9ec8147c1e4aa6bb54825', '5fcb210c700caee213c27ea8', '5fcb237f478137e2e3e9358d', '5fcb25f847e743e39d9c5831']

            let random = Math.floor(Math.random() * articles.length)

            const articleId = articles[random]

            return Article.findById(articleId).lean()
                .then(article => {
                    if (!article) throw new NotFoundError(`article with id ${articleId} not found`)

                    const { _id } = article
                    article.id = _id.toString()

                    return article
        })
    })
}