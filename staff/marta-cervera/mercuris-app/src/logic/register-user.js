import { call } from '../utils'
import context from './context'

export default (function(name, email,password, callback)  {

    const { API_URL } = this
    
    call('POST',  `${API_URL}/users`, {'Content-type': 'application/json'},
    JSON.stringify({ name,email,password }),
    (status, response) => {
        if(status === 0)
            return callback(new Error('server error'))
        else if(status !== 201){
            const{ error } = JSON.parse(response)

            return callback(new Error(error))
        }

        callback(null)
    })
}).bind(context)