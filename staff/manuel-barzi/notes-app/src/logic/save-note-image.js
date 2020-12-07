import { call } from 'notes-utils'
import { validateId, validateFile, validateCallback } from './helpers/validations'

export default function (noteId, image, callback) {
    validateId(noteId)
    validateFile(image)
    validateCallback(callback)

    var formData = new FormData();
    formData.append("image", image);

    call('POST', `http://localhost:4000/api/notes/${noteId}/images`, {},
        formData,
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 204) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            callback(null)
        })
}