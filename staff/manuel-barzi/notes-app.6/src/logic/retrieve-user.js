import { call } from 'notes-utils'
import { validateToken, validateCallback } from './helpers/validations'

export default function (token, callback) {
    validateToken(token)
    validateCallback(callback)

    call('GET', 'http://localhost:4000/api/users', { Authorization: `Bearer ${token}` },
        '',
        (error, response) => {
            if (error)
                return callback(error)

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            const user = JSON.parse(body)

            callback(null, user)
        })
}