import call from '../utils/call'
import context from './context'
import { validateToken, validateCallback } from './helpers/validations'

export default (function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/recipes`, { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const recipes = JSON.parse(response)

            callback(null, recipes)
        })
}).bind(context)