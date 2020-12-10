import { call } from '../utils'
import {
    validateId,
    validateText,
    validateTags,
    validateVisibility,
    validateCallback
  } from "./helpers/validations";

  debugger

export default function (id, text, tags, token, visibility, callback) {
    if (typeof id !== 'undefined') validateId(id)
    validateText(text);
    validateTags(tags);
   
    validateVisibility(visibility);
    validateCallback(callback);

    call('POST', 'http://localhost:4000/api/notes', { 'Content-type': 'application/json', Authorization: `Bearer ${token}`},
        JSON.stringify({id, text, tags, visibility}),
        (status, response) => {
            if(status === 0) {
                callback(new Error('server down'))
            }else if(status !==200){
                const { error } = JSON.parse(response)
                

                return callback(new Error(error))
            }
            
            callback(null)
        })
}

