import { call } from '../utils'
import {  validateCallback, validateId, validateText, validateTags, validateVisibility, validateToken } from './helpers/validations'

export default function (id, text, tags, token, visibility, callback) {
    // (id, text, tags, token, visibility, callback)
    if (typeof id !== 'undefined') validateId(id)
    validateText(text)
    validateTags(tags)
    validateToken(token)
    validateVisibility(visibility)
    validateCallback(callback)

    // if (tags[0] === '') tags = []
    

    call('POST', 'http://localhost:4000/api/notes', { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
        JSON.stringify({ id, text, tags, visibility }),
        (status, response) => {
            if (status === 0) {
                callback(new Error('server down'))
            } else if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }
            callback(null)
        })
}