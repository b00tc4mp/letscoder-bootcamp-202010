import { call } from '../utils'
import { validateFile, validateCallback } from './helpers/validations'
import context from './context'


export default (function (offerId, pic, callback) {

    validateCallback(callback)
    validateFile(pic)

    var formData = new FormData();
    formData.append("image", pic);


    const { API_URL } = this
debugger
    call('POST', `${API_URL}/offers/${offerId}/pics`, {},
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