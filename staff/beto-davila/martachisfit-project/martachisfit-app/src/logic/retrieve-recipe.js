import call from '../utils/call'
import context from './context'
import { validateCallback, validateId } from './helpers/validations'

export default (function (recipeId, callback) {
    validateId(recipeId)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/recipes/${recipeId}`, {},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const recipe = JSON.parse(response)

            callback(null, recipe)
        })
}).bind(context)