'/api/users/search'

import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'


function searchUserFullname(token, query, callback) {
    validateToken(token)
    validateCallback(callback)

    call('POST', 'http://localhost:4000/api/users/search',
        { 'Content-type': 'application/json', Authorization: `Bearer ${token}`  }
        , JSON.stringify({ query }),
        function (status, response) {
            if (status === 0) {
                return callback(new Error('server down'))
            } else if (status !== 200) {
                var res = JSON.parse(response);
                return callback(new Error(res.error));

            }
            let results = JSON.parse(response);

            call('GET', 'http://localhost:4000/api/users',
                { Authorization: `Bearer ${token}` }, '', function (status, response) {
                    if (status === 0) {
                        callback(new Error('server down'))
                    } else if (status !== 200) {
                        var res = JSON.parse(response);
                        callback(new Error(res.error));
                    }
                    const  { user } = JSON.parse(response);

                    const { follows = [] } = user
                    

                    /////////

                    // results = results.map(user => user.followed = follows.includes(user.id))
                    results.forEach(user => user.followed = follows.includes(user.id) )
        
                    callback(null, results);
                })

        })
};

export default searchUserFullname