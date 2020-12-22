import { call } from '../utils'
import { validateToken, validateId, validateDescription, validatePrice, validateCallback, validateName } from './helpers/validations'
import context from './context'

/**
 *  Save product
 * 
 * @param {string} token use to know company
 * @param {string} productId product's identification number(ObjectId)
 * @param {Stream} description product´s description
 *  @param {Stream} price product´s price
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {array} returns array of objects with the pet info
 */



export default (function saveProduct(token, productId, name, description, price, callback) {
    validateToken(token)
    if (typeof productId !== 'undefined') validateId(productId)
    validateName(name)
    validateDescription(description)
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