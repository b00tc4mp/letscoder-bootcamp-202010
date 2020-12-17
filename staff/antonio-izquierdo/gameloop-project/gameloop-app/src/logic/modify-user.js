import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'

export default function (token, changes, callback) {
    validateToken(token)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/edit', 
    { Authorization: `Bearer ${token}`,
    'Content-type': 'application/json'
},
        JSON.stringify(changes),
        (status, response) => {
            if (status === 0)
            {console.log('status')
                return callback(new Error('server error'))}
            else if (status !== 200) {
                console.log('200');
                const { error } = JSON.parse(response) 

                return callback(new Error(error))
            }
            console.log(response)
            const user = JSON.parse(response)

            callback(null, user)
        })
}