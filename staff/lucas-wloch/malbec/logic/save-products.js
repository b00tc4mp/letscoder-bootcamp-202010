import call from '../utils/call'
import { validateProductAlergenos, validateProductCategory, validateProductAvailable, validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateId, validateToken } from './helpers/validations'
import context from './context'

const saveProducts = (token, productId, name, description, price, glutenFree, vegan, alergenos, category, available, callback) => {
    if (typeof productId !== "undefined") validateId(productId)
    if (typeof token !== "undefined") validateToken(token)
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)

    const { API_URL } = context

        call('POST', `${API_URL}/products`, { 'Content-type': 'application/json', Authorization:`Bearer ${token}` },
            JSON.stringify({ productId, name, description, price, glutenFree, vegan, alergenos, category, available }),
            (status, response) => {
                if (status === 0) {
                    return callback(new Error('server down'))
                } else if (status !== 201) {
                    const { error } = JSON.parse(response)

                    return callback(new Error(error))
                }
                const { productId } = JSON.parse(response)

                callback(null, productId)
            })
    
}
export default saveProducts
