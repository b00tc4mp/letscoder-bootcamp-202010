import { call } from '../utils'
import { validateCallback, validatePrice, validateToken,  validateCompany, validateProduct } from './helpers/validations'
import context from './context'
/**
 * Retrieves pets that match a query criteria
 * 
 * @param {String} token use to find the CompanyId
 * @param {string} queryCompany query to find information about the company, with this criteria you can search by name, email and description
 * * @param {string} queryProduct query to find information about the pet, with this criteria you can search by name and description
 * @param {String} price productís price
 * @param {String} priceMin productís price
 * @param {String} priceMax productís price
 * 
 * 
 * @throws {Error} on server error
 * @throws {Error} if status is not 200
 * 
 * @returns {Array} Pets representing the pets matching the queries criteria. Otherwise, empty array.
 * 
 */


export default (function (token, company, product, price, priceMin, priceMax, callback) {
    if (typeof token !== 'undefined') validateToken(token)
    if (typeof company !== 'undefined') validateCompany(company)
    if (typeof product !== 'undefined') validateProduct(product)
    if (typeof price !== 'undefined') validatePrice(price)
    if (typeof priceMin !== 'undefined') validatePrice(priceMin)
    if (typeof priceMax !== 'undefined') validatePrice(priceMax)

    validateCallback(callback)

    const { API_URL } = this

    const queryParams = {}

    if (company) queryParams.queryCompany = company
    if (product) queryParams.queryProduct = product
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

