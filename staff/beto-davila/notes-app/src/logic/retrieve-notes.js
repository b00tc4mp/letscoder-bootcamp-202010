import { call } from '../utils'
import { validateId, validateCallback } from './helpers/validations'

/**
 * Retrieve user notes
 * 
 * @example
 *      retrieveNotes('1605100834183530418874468846100', console.log)
 * 
 * @param {*} token 
 * @param {*} callback 
 */
export default function retrieveNotes(token, callback) {
    validateId(token)
    validateCallback(callback)

    call('GET', 'http://localhost:4000/api/notes', { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const notes = JSON.parse(response)

            callback(null, notes)
        })
}