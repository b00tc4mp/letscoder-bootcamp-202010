'/api/users/search'

import { call } from '../utils'
import { validateToken, validateCallback } from './helpers/validations'


function searchUserFullname(query,callback){
    validateCallback(callback)
    
    call('POST','http://localhost:4000/api/users/search',
    {'Content-type': 'application/json'}
    ,JSON.stringify({query}),
    function(status,response){
        if(status === 0){
            callback(new Error('server down'))
        }else if(status === 200){
            const results = JSON.parse(response);
            callback(null,results);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
        
    })
};

export default searchUserFullname