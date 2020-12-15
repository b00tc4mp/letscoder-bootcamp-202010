
import { call } from '../utils'
import { validateId, validateCallback } from './helpers/validations'

export default function (pictogramId, token,callback)  {
/*     validateId(ownerId) */
    validateCallback(callback)
    validateId(pictogramId)

    call(
        "DELETE",
        "http://localhost:4000/api/pictograms",
        { Authorization: "Bearer " + token, "Content-type": "application/json" },
        '{ "pictogramId": "' + pictogramId + '" }',
        function (status, response) {
          if (status === 200) {
            callback(null);
          } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
          }
        }
      );
}
