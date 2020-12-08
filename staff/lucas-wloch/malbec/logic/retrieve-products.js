import call from '../utils/call'
import { validateProductCategory } from './helpers/validations'


const retrieveProducts = (category) => {
    validateProductCategory(category)

    return new Promise((resolve, reject) => {
        call('GET', `http://localhost:4000/api/products/${category}`, {},'',
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

export default retrieveProducts