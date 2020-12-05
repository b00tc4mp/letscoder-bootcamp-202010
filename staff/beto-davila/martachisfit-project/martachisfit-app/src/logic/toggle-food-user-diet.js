import call from '../utils/call'
import { validateId, validateToken, validateCallback } from './helpers/validations'

export default function (token, foodId, callback) {
    validateToken(token)
    validateId(foodId)
    validateCallback(callback)

    call('PATCH', `http://localhost:4000/api/users/foods/${foodId}`, { Authorization: `Bearer ${token}`, 'Content_type': 'application/json' },
        JSON.stringify({ foodId }),
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