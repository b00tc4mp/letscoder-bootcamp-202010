import { call } from '../utils'
import { validateCallback, validateId } from './helpers/validations'


function retrieveNotes(id,callback){
    // validateId(id)
    validateCallback(callback)
    
    call('GET','http://localhost:4000/api/notes',
    {Authorization:`Bearer ${id}`},'',function(status,response){
        if(status === 0){
            callback(new Error('server down'))
        }else if(status === 200){
            const notes = JSON.parse(response);
            // const notes = notesCursor.toArray()
            // debugger
            callback(null,notes);
        } else {
            var res = JSON.parse(response);
            callback(new Error(res.error));
        };
        
    })
};

export default retrieveNotes