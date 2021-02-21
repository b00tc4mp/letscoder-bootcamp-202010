import call from '../utils/call'
import { validateId, validateToken, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, articleId, callback) {
    validateToken(token)
    validateId(articleId)
    validateCallback(callback)

    const { API_URL } = this

    call('PATCH', `${API_URL}/users/articles/${articleId}`, { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' },
        JSON.stringify({ savedArticles: [articleId] }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}).bind(context)