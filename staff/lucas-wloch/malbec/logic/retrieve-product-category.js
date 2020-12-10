import call from '../utils/call'
import { validateProductCategory } from './helpers/validations'
import context from './context'

const retrieveProductCategory = (category) => {
    validateProductCategory(category)
    
    const { API_URL } = context

    return new Promise((resolve, reject) => {
        call('GET', `${API_URL}/products/category/${category}`, {},'',
            (status, response) => {
                if (status === 0) {
                    return reject(new Error('server down'))
                } else if (status !== 200) {
                    const { error } = JSON.parse(response)

                    return reject(new Error(error))
                }
                const results = JSON.parse(response)

                return resolve(results)
                // callback(results)
            })
    })
}

export default retrieveProductCategory