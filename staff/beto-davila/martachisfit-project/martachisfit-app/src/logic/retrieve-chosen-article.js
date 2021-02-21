import call from '../utils/call'
import context from './context'
import { validateToken, validateCallback, validateId } from './helpers/validations'

export default (function (token, articleId, callback) {
    validateToken(token)
    validateId(articleId)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/users/articles/${articleId}`, { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            const result = JSON.parse(response)

            callback(null, result)
        })
}).bind(context)