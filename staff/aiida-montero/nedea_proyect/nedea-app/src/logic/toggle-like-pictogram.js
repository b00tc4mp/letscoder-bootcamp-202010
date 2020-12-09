import { call } from '../utils'
import { validateId, validateCallback } from './helpers/validations'

export default function (token, pictogramId, callback) {
    validateToken(token)
    validateCallback(callback)
    validateId(pictogramId)

    call('GET', 'http://localhost:4000/api/users', 
    { Authorization: `Bearer ${token}` },
        '',
        (status, response) => {
            if (status === 0)
                return callback(new Error('server error'))
            else if (status !== 200) {
                const { error } = JSON.parse(response)

                return callback(new Error(error))
            }

            const {likes} = likes.indexOf(pictogramId)

                if (index > -1) likes.splice(index, 1);
                 else likes.push(pictogramId);

            call("PATCH", "http://localhost:4000/api/users",
            {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
              JSON.stringify({ likes }),
              (status, response) => {
                if (status === 204) callback(null);
                else {
                  var response = JSON.parse(this.responseText);
    
                  callback(new Error(response.error));
                }
              }
            )
        })
}