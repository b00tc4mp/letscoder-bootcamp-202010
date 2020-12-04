import { call } from '../utils'
import { validateQuery } from './helpers/validations'
export default function searchPictogram( query, callback) {
    validateQuery(query)
    
    call('GET', `http://localhost:4000/api/pictograms?search=${query}`, { 
        'Content-type': 'application/json',
    },
    JSON.stringify({ query }),
    (status, response) => {
        if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(JSON.parse(response))
        })
}