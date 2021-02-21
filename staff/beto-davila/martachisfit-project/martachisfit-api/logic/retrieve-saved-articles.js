const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { User, Article } } = require('martachisfit-data')

/**
 * Retrieves an array with the articles added by the user
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

            const { savedArticles } = user

            return Promise.all(savedArticles.map(articleId =>
                Article.findById(articleId).lean()
                    .then(article => {
                        if (!article) throw new NotFoundError(`article with id ${articleId} not found`)

                        const { title, _id } = article

                        return ({ title, _id })
                    })
            ))
        })
        .then(results => results)
}