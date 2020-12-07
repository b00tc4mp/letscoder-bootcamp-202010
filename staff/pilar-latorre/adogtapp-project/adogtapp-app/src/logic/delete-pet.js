import { call } from '../utils'
import {  validateCallback, validateId } from './helpers/validations'

export default function ( id, callback) {
    //validateToken(token)
    validateId(id)
    validateCallback(callback)
debugger
    call('DELETE', `http://localhost:4000/api/pets/${id}`, {},
    '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
           

            callback(null)
        })
}