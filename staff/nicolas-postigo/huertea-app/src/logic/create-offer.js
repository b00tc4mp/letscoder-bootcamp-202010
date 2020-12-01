import { call } from '../utils'
import { validateUpdate, validateCallback } from './helpers/validations'

export default function (update, callback) {
    validateUpdate(update)
    validateCallback(callback)

debugger
    call('POST', 'http://localhost:4000/api/offer', { 'Content-type': 'application/json' },
        JSON.stringify(update),
        function (status, response) {
            if (status === 201) {
                callback(null)
            } else {
                debugger
                console.log(response)
                var res = JSON.parse(response)
                callback(new Error(res.error))
            }
        }
    )
} 
