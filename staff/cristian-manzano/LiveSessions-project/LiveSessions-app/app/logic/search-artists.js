import { call } from '../../utils'
import { validateCallback, validateToken } from './helpers/validations'

const {env: {API_URL}} = process

export default (function (token, queryTags, callback) {
    validateToken(token) 
    validateCallback(callback)

    const queryParams = {}

    if (queryTags) queryParams.queryTags = queryTags


    const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&')
    console.log(queryString)


    call('GET', `${API_URL}/artists/?${queryString}`,
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

            const users = JSON.parse(response)

            callback(null, users)
        })
})