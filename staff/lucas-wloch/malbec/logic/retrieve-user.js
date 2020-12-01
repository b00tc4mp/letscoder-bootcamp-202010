import  call  from '../utils/call'
import { validateToken, validateCallback } from './helpers/validations'


function retrieveUser(token,callback){
    validateToken(token)
    validateCallback(callback)

    call('GET','http://localhost:3000/api/users',
    {Authorization:`Bearer ${token}`},'',function(status,response){
        if(status === 0){
            callback(new Error('server down'))
        }else if(status === 200){
            const {user} = JSON.parse(response);
            callback(null,user);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };

    })
};

export default retrieveUser 