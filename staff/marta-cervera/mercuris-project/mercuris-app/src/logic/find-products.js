import { call } from '../utils'
import { validateCallback, validateToken } from './helpers/validations'
import context from './context'

export default (function (token, queryCompany, queryProduct, price, priceMin, priceMax, callback) {
    if (token !== undefined) validateToken(token) 
    validateCallback(callback)

    const { API_URL } = this

    const queryParams = {}

    if (queryCompany) queryParams.queryCompany = queryCompany
    if (queryProduct) queryParams.queryProduct = queryProduct
    if (price) queryParams.price = price
    if (priceMin) queryParams.priceMin = priceMin
    if (priceMax) queryParams.priceMax = priceMax


    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')



    call('GET', `${API_URL}/products/?${queryString}`,
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
}).bind(context)

