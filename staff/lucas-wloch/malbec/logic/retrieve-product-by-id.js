import call from '../utils/call'
import { validateId } from './helpers/validations'
import context from './context'

const retrieveProductById = (productId) => {
    validateId(productId)

    const { API_URL } = context

    return call('GET', `${API_URL}/products/${productId}`, {}, '')
        .then(response => {

            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
            const product = JSON.parse(body)

            return product
        })
}


export default retrieveProductById