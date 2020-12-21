import { call } from '../utils'
import { validateId, validateFile, validateCallback, validateToken } from './helpers/validations'
import context from './context'

 
export default (function (token, gameId, image, callback) {
    validateToken(token)
    validateId(gameId)
    if (typeof image !== 'undefined') validateFile(image)
    validateCallback(callback)
    

    var formData = new FormData();
    formData.append("image", image);

    const { API_URL } = this

    call('POST',`${API_URL}/games/${gameId}/images`, { Authorization: `Bearer ${token}` },
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