import { call } from 'notes-utils'
import { validateToken, validateId, validateFile, validateCallback } from './helpers/validations'
import context from './context'

export default (function (token, noteId, image, callback) {
    validateToken(token)
    validateId(noteId)
    validateFile(image)
    validateCallback(callback)

    var formData = new FormData();
    formData.append("image", image);

    const { API_URL } = this

    call('POST', `${API_URL}/notes/${noteId}/images`, { Authorization: `Bearer ${token}` },
        formData,
        (error, response) => {
            if (error)
                return callback(error)

            const { status, body } = response

            if (status !== 204) {
                const { error } = JSON.parse(body)

                return callback(new Error(error))
            }

            callback(null)
        })
}).bind(context)