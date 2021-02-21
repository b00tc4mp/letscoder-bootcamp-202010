const { validateId } = require('./helpers/validations')
const { NotFoundError } = require('martachisfit-errors')
const { models: { Article, User } } = require('martachisfit-data')

/**
 * Retrieves an article randomly
 * 
 * @param {string} userId user's id
 * 
 * @returns {Object} returns an object with the article's properties
 * 
 * @throws {NotFoundError} if the article does not exist
 */
module.exports = function (userId) {
    validateId(userId)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            const articles = ['5fd34823f1e5d663f030ce51', '5fd7b14ecb569c9424673eb6', '5fd349f009fad36464c97c74', '5fd7ae642e2fe1936c6bee41', '5fd34b613d6e346589e1beec', '5fd34d4c69cf1265fada3299', '5fd7abc2e9749d92cb055259']

            let random = Math.floor(Math.random() * articles.length)

            const articleId = articles[random]

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