import { call } from '../utils'
import {validateId, validateText, validateTags, validateCallback } from './helpers/validations'

export default function (id, text, visibility, callback) {
    if (id !== undefined)validateId(id)
    validateText(text)
    validateTags(tags)
    validateId(owner)
    validateVisibility(visibility)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/notes', { 'Content-type': 'application/json' },
        JSON.stringify({ id, text, ownwe, visibility }),
        (status, response) => {
            if (status !== 201) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}