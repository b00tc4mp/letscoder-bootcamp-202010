import call from '../utils/call'
import { validateQuery, validateCallback } from './helpers/validations'

export default function findFood(query, callback) {

    validateQuery(query)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/food/search', { 'Content-type': 'application/json' },
        JSON.stringify( {query} ),
        (status, response) => {
            if(status === 0)
                return callback(new Error('server error'))
                
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            } else {

                const result = JSON.parse(response)

                const food = result[0]
    
                callback(null, food)
            }
        })
}