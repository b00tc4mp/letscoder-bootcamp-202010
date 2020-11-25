import { call } from '../utils'
import { validateCallback, validateId } from './helpers/validations'


function retrieveNotes(token,callback){
    //validateId(id)
    validateCallback(callback)
    
    call('GET','http://localhost:4000/api/notes',
    {Authorization:`Bearer ${token}`},'',function(status,response){
        if(status === 0){
            callback(new Error('server down'))
        }else if(status === 200){
            const notes = JSON.parse(response);
            callback(null,notes);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
        
    })
};

export default retrieveNotes