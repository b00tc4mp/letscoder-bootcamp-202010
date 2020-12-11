import { call } from 'notes-utils'
import { validateToken, validateId, validateText, validateTags, validateVisibility, validateCallback } from './helpers/validations'
import context from './context'

/**
 * Saves a user note
 * 
 * @example
 *      saveNote('1605100834183530418874468846100', undefined, 'Hola, Mundo!', ['hola', 'mundo'], 'public', console.log)
 *      saveNote('1605100834183530418874468846100', '1605861826363177580724222532000', 'Hello, World!', ['hello', 'world'], 'private', console.log)
 *      saveNote('1605100834183530418874468846100', undefined, 'Ciao, Mondo!', ['ciao', 'mondo'], 'private', console.log)
 * 
 * @param {string} token 
 * @param {string} noteId 
 * @param {string} text 
 * @param {array} tags
 * @param {string} visibility 
 * @param {function} callback 
 */
export default (function saveNote(token, noteId, text, tags, visibility, callback) {
    validateToken(token)
    if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/notes`, {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ noteId, text, tags, visibility }),
        (error, response) => {
            if (error)
                return callback(new Error('server error'))

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            const { noteId } = JSON.parse(body)

            callback(null, noteId)
        })
}).bind(context)