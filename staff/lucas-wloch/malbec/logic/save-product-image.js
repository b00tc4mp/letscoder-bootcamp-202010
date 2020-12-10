import call from '../utils/call'
import { validateFile, validateToken, validateCallback, validateId } from './helpers/validations'

import context from './context'

const saveProductImage = (token, productId, image, callback) => {
    validateToken(token)
    validateId(productId)
    validateFile(image)
    validateCallback(callback)

    var formData = new FormData();
    formData.append('image', image);

    const { API_URL } = context

    call('POST', `${API_URL}/products/${productId}/images`, {},
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

export default saveProductImage

