import { call } from '../utils'
import { validateId, validateFile, validateCallback } from './helpers/validations'
import context from './context'

export default (function (petId, image, callback) {
    validateId(petId)
    validateFile(image)
    validateCallback(callback)

    var formData = new FormData();
    formData.append("image", image);

    const { API_URL } = this
debugger
    call('POST', `${API_URL}/pets/${petId}/images`, {},
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
}).bind(context)