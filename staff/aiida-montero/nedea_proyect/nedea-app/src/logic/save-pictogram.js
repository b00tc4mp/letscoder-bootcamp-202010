import { call } from '../utils'
import { validateToken, validateId, validateTitle, validateCallback } from './helpers/validations'

export default function savePictogram( pictogramId, token, title, description,  callback) {
    validateToken(token)
    if (typeof pictogramId !== 'undefined') validateId(pictogramId)
    validateTitle(title)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/pictograms', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ pictogramId, title, description }),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            
            const  { pictogramId } = JSON.parse(response)
            callback(null, pictogramId)
        })
}