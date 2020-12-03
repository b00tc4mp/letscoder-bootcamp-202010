import call from '../utils/call'
import { validateCallback, validateToken } from './helpers/validations'

export default function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    call('GET', 'http://localhost:4000/api/users/diets', { Authorization: `Bearer ${token}`},
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const diet = JSON.parse(response)

            callback(null, diet)
        })
}