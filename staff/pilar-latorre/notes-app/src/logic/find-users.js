import { call } from '../utils'
//import { validateEmail, validatePassword, validateCallback } from './helpers/validations'

export default function (query, callback) {
    //validateEmail(email)
    //validatePassword(password)
    //validateCallback(callback)
debugger
    call('POST', 'http://localhost:4000/api/users/find', { 'Content-type': 'application/json'},
        JSON.stringify({query}),
        (status, response) => {
            if(status !== 200) {

                const { error } = JSON.parse(response) 

                return callback(new Error(error))

            } 
            const results  = JSON.parse(response) 
            callback(null, results)
        })
}