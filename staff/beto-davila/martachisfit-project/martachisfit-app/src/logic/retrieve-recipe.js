import call from '../utils/call'
import { validateCallback, validateId } from './helpers/validations'

export default function (recipeId, callback) {
    validateId(recipeId)
    validateCallback(callback)

    call('GET', `http://localhost:4000/api/recipes/${recipeId}`, {},
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
}