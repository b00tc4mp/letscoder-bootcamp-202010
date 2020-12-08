import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

/**
 * Retrieve user pictograms
 * 
 * @example
 *      retrievepictograms('1605100834183530418874468846100', console.log)
 * 
 * @param {*} token 
 * @param {*} callback 
 */
export default function retrievePictograms(token, callback) {
    validateToken(token)
    validateCallback(callback)

    call('GET', 'http://localhost:4000/api/pictograms', { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const pictograms = JSON.parse(response)

            callback(null, pictograms)
        })
}