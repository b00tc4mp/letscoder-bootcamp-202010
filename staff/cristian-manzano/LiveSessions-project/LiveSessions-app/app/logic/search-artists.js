import { call } from '../../utils'
import { validateCallback, validateToken } from './helpers/validations'

export default (function (token, queryTags, callback) {
    validateToken(token) 
    validateCallback(callback)


    const queryParams = {}

    if (queryTags) queryParams.queryTags = queryTags


    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')



    call('GET', `http://192.168.0.21:4000/api/users/?${queryString}`,
        { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            debugger
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response) 

                return callback(new Error(error))
            }

            const products = JSON.parse(response)

            callback(null, products)
        })
})