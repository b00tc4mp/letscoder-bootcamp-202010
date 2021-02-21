import { call } from '../utils'
import {  validateCallback, validateId, validateToken } from './helpers/validations'

export default function (token, followId, callback) {
    validateToken(token)
    validateId(followId)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/follow', { 'Content-type': 'application/json', Authorization: `Bearer ${token}`},
        JSON.stringify({ followId }),
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