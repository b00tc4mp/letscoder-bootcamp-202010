import call from '../utils/call'
import { validateQuery, validateCallback } from './helpers/validations'
import context from './context'

export default (function findFood(query, callback) {
    validateQuery(query)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/foods?q=${query}`, {},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))

            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            } else {

                const result = JSON.parse(response)

                const food = result[0]

                callback(null, food)
            }
        })
}).bind(context)