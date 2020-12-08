import call from '../utils/call'
import { validateProductAlergenos, validateProductCategory, validateProductAvailable, validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateId } from './helpers/validations'

const saveProducts = (productId, name, description, price, glutenFree, vegan, alergenos, category, available, callback) => {
    if (typeof productId !== "undefined") validateId(productId)
    validateProductName(name)
    validateProductDescription(description)
    validateProductPrice(price)
    validateProductGlutenFree(glutenFree)
    validateProductVegan(vegan)
    validateProductAlergenos(alergenos)
    validateProductCategory(category)
    validateProductAvailable(available)

        call('POST', 'http://localhost:4000/api/products', { 'Content-type': 'application/json' },
            JSON.stringify({ productId, name, description, price, glutenFree, vegan, alergenos, category, available }),
            (status, response) => {
                if (status === 0) {
                    return callback(new Error('server down'))
                } else if (status !== 201) {
                    const { error } = JSON.parse(response)

                    return callback(new Error(error))
                }
                callback(null)
            })
    
}
export default saveProducts
