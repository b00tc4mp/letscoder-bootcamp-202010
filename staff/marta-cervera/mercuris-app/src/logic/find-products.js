import { call } from '../utils'
import { validateCallback } from './helpers/validations'

export default function (token, queryCompany,queryProduct, price, priceMin,priceMax,callback) {

    validateCallback(callback)
    //poner  validations

    call('POST', 'http://localhost:4000/api/products/find', {'Content-type': 'application/json' },
    JSON.stringify({ token, queryCompany,queryProduct, price, priceMin,priceMax}),
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const pets = JSON.parse(response)

            callback(null, pets)
        })
}