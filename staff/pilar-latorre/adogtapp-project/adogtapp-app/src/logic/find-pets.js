import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

export default function (token, query, city, name, species, breed, callback) {
    validateToken(token)
    validateCallback(callback)
    //poner las putas validations

    call('GET', 'http://localhost:4000/api/pets?q=<query>', { Authorization: `Bearer ${token}` },
    JSON.stringify({ token, query, city, name, species, breed }),
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