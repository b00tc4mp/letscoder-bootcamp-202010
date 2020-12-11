import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'

export default function (id, callback) {
    validateId(id)
    validateCallback(callback)
debugger
    call('GET', `http://localhost:4000/api/games/${id}`, {'Content-type': 'application/json'},
        null,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const game = JSON.parse(response)

            callback(null, game)
        })
}