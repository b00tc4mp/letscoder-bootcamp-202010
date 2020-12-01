import { call } from '../utils'

export default function(name, email,password, callback)  {
    call('POST', 'http://localhost:4000/api/users', {'Content-type': 'application/json'},
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
}