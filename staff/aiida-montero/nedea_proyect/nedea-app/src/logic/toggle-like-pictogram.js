import { call } from '../utils'
import { validateId, validateCallback, validateToken } from './helpers/validations'

export default function (token, pictogramId, callback) {
    validateToken(token)
    validateCallback(callback)
    validateId(pictogramId)
            call("PATCH", "http://localhost:4000/api/users",
            {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
              JSON.stringify({ likeId : pictogramId }),
              (status, response) => {
                if (status === 200) callback(null);
                else {
                  debugger
                  var response = JSON.parse(this.responseText);
    
                  callback(new Error(response.error));
                }
              }
            )
        }
