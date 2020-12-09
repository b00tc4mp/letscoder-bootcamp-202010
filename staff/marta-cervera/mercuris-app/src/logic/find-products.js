import { call } from '../utils'
import { validateCallback } from './helpers/validations'

export default function ( token, queryCompany, queryProduct, price, priceMin, priceMax,callback) {
    debugger

    validateCallback(callback)
    //poner  validations

    call('GET', `http://localhost:4000/api/products/?queryCompany=${queryCompany}&queryProduct=${queryProduct}&price=${price}&priceMin=${priceMin}&priceMax=${priceMax}`, 
    { Authorization: `Bearer ${token}` },
    '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

             const products = JSON.parse(response)

            callback(null, products)
        })
}

