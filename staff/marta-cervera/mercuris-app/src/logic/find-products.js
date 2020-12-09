import { call } from '../utils'
import { validateCallback } from './helpers/validations'

export default function (token,callback) {
    debugger

    validateCallback(callback)
    //poner  validations

    call('GET', 'http://localhost:4000/api/products/?q=<queryCompany>&q=:queryProduct&price=:price>&priceMin=:priceMin&priceMax=:priceMax', {'Content-type': 'application/json' },
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

