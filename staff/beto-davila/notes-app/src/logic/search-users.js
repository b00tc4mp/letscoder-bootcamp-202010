import { call } from '../utils'
import { validateQuery, validateCallback } from './helpers/validations'

export default function (query, callback) {

    validateQuery(query)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/search', { 'Content-type': 'application/json' },
        JSON.stringify( {query} ),
        (status, response) => {
            if(status === 0)
                return callback(new Error('server error'))
                
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            } else {

                const users = JSON.parse(response)
    
                callback(null, users)
            }
        })
}
