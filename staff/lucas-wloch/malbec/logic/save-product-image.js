import call from '../utils/call'
import { validateFile, validateToken, validateCallback, validateId } from './helpers/validations'

import context from './context'

const saveProductImage = (token, productId, image) => {
    validateToken(token)
    validateId(productId)
    validateFile(image)

    var formData = new FormData();

    formData.append('image', image);

    const { API_URL } = context

    return call('POST', `${API_URL}/products/${productId}/images`, {}, formData)
        .then(response => {
            const { status, body } = response

            if (status !== 204) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }

        })

}
export default saveProductImage

