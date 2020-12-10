import call from '../utils/call'
import { validateId } from './helpers/validations'
import context from './context'

const retrieveProductById = (productId) => {
    validateId(productId)
    const { API_URL } = context

    return new Promise((resolve, reject) => {
        call('GET', `${API_URL}/products/${productId}`, {},'',
            (status, response) => {
                if (status === 0) {
                    return reject(new Error('server down'))
                } else if (status !== 200) {
                    const { error } = JSON.parse(response)

                    return reject(new Error(error))
                }
                const product = JSON.parse(response)

                return resolve(product)
                // callback(results)
            })
    })
}

export default retrieveProductById