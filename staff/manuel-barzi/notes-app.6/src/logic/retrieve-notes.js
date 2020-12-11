import { call } from 'notes-utils'
import { validateToken, validateCallback } from './helpers/validations'
import context from './context'

/**
 * Retrieve user notes
 * 
 * @example
 *      retrieveNotes('1605100834183530418874468846100', console.log)
 * 
 * @param {*} token 
 * @param {*} callback 
 */
export default (function retrieveNotes(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const { API_URL } = this

    call('GET', `${API_URL}/notes`, { Authorization: `Bearer ${token}` },
        '',
        (error, response) => {
            if (error)
                return callback(error)

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            const notes = JSON.parse(body)

            callback(null, notes)
        })
}).bind(context)