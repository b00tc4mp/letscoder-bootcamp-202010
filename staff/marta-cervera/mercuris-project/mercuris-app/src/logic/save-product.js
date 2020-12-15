import { call } from '../utils'
import { validateToken, validateId, validateDescription, validatePrice, validateCallback, validateName } from './helpers/validations'
import context from './context'

export default (function saveProduct(productId, token, name, description, price, callback) {
    debugger
    validateToken(token)
    if (typeof productId !== 'undefined') validateId(productId)
    validateDescription(description)
    validateName(name)
    validatePrice(price)
    validateCallback(callback)

    const { API_URL } = this

    call('POST', `${API_URL}/products`, 
    {
        'Content-type': ' application/json',
        Authorization: `Bearer ${token}`,
    },
        JSON.stringify({ productId, name, description, price }),
        (status, response) => {

            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const { productId } = JSON.parse(response)

            callback(null, productId)

        })
}).bind(context)