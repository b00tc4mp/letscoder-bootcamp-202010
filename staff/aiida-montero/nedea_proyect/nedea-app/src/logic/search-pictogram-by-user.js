import { call } from '../utils'
import { validateToken } from './helpers/validations'
export default function searchPictogramByUser(token, callback) {
    validateToken(token)
    
    call('GET', `http://localhost:4000/api/my-pictograms`, { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    null, 
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