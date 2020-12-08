import { call } from '../utils'
import { validateFile, validateCallback } from './helpers/validations'

export default function (offerId, pic, callback) {
    validateCallback(callback)
    validateFile(pic)

    var formData = new FormData();
    formData.append("image", pic);


    call('POST', `http://localhost:4000/api/notes/${offerId}/pics`, {},
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