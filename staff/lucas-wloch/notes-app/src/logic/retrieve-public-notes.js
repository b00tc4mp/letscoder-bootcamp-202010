import { call } from '../utils'
import { validateCallback, validateToken, validateFollows } from './helpers/validations'


function retrievePublicNotes(token, follows ,callback){
    validateToken(token)
    validateFollows(follows)
    validateCallback(callback)
    
    call('POST','http://localhost:4000/api/notes/public',
    {Authorization:`Bearer ${token}`, 'Content-type': 'application/json'},JSON.stringify({ follows }),function(status,response){
        if(status === 0){
            callback(new Error('server down'))
        }else if(status === 200){
            const notes = JSON.parse(response);
            // const notes = notesCursor.toArray()
            callback(null,notes);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
        
    })
};

export default retrievePublicNotes