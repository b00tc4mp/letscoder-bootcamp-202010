import call from '../utils/call'
import { validateProductCategory } from './helpers/validations'
import context from './context'

const retrieveProductCategory = (category) => {
    validateProductCategory(category)

    const { API_URL } = context

    return call('GET', `${API_URL}/products/category/${category}`, {}, '')
        .then(response => {
            const { status, body } = response

            if (status !== 200) {
                const { error } = JSON.parse(body)

                throw new Error(error)
            }
            const results = JSON.parse(body)

            return results
        })
}


export default retrieveProductCategory