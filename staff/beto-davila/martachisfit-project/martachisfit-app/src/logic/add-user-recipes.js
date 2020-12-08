import call from '../utils/call'
import { validateId, validateToken, validateCallback } from './helpers/validations'

export default function (token, recipeId, callback) {
    validateToken(token)
    validateId(recipeId)
    validateCallback(callback)

    call('PATCH', `http://localhost:4000/api/users/recipes/${recipeId}`, { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' },
        JSON.stringify({ savedRecipes: [recipeId] }),
        (status, response) => {
            if (status === 0)
                return callback (new Error('server error'))
            else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}