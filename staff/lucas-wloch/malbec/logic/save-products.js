import call from '../utils/call'
import { validateProductAlergenos, validateProductCategory, validateProductAvailable, validateProductName, validateProductDescription, validateProductPrice, validateProductGlutenFree, validateProductVegan, validateId, validateToken } from './helpers/validations'
import context from './context'

const saveProducts = (token, productId, name, description, price, glutenFree, vegan, alergenos, category, available) => {
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

    return call('POST', `${API_URL}/products`, { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
        JSON.stringify({ productId, name, description, price, glutenFree, vegan, alergenos, category, available }))
        .then(response => {
            const { status, body } = response

            if (status !== 201) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
            const { productId } = JSON.parse(body)

            return productId
        })

}
export default saveProducts
