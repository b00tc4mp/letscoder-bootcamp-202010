import { call } from '../utils'
import { validateId, validateText, validateTags, validateVisibility, validateCallback } from './helpers/validations'

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
export default function saveNote(token, noteId, text, tags, visibility, callback) {
    debugger
    //validateId(token)
    //if (typeof noteId !== 'undefined') validateId(noteId)
    validateText(text)
    validateTags(tags)
    validateVisibility(visibility)
    validateCallback(callback)
debugger
    call('POST', 'http://localhost:4000/api/notes', { 
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ noteId, text, tags, visibility }),
        (status, response) => {

            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}