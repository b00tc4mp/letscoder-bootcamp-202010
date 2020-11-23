import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'

export default function (userId, followId, callback) {
    validateId(userId)
    validateId(followId)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/follow', { 'Content-type': 'application/json'},
        JSON.stringify({ userId, followId }),
        (status, response) => {
            if (status === 0) {
                callback(new Error('server down'))
            } else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}