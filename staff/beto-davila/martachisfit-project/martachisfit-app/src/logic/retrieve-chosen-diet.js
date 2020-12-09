import call from '../utils/call'
import { validateToken, validateCallback, validateDietType } from './helpers/validations'

export default function (token, dietType, callback) {
    validateToken(token)
    validateDietType(dietType)
    validateCallback(callback)

    call('GET', `http://localhost:4000/api/users/diets/${dietType}`, { Authorization: `Bearer ${token}` },
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
}