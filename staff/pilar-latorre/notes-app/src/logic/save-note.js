import { call } from '../utils'
import {
    validateId,
    validateText,
    validateTags,
    validateVisibility,
    validateCallback
  } from "./helpers/validations";

export default function (id, text, tags, owner, visibility, callback) {
    if (typeof id !== 'undefined') validateId(id)
    validateText(text);
    validateTags(tags);
    validateId(owner);
    validateVisibility(visibility);
    validateCallback(callback);

    call('POST', 'http://localhost:4000/api/notes', { 'Content-type': 'application/json', Authorization: `Bearer ${owner}`},
        JSON.stringify({id, text, tags, owner, visibility}),
        (status, response) => {
            if(status === 0) {
                callback(new Error('server down'))
            }else if(status !==201){
                const { error } = JSON.parse(response)
                

                return callback(new Error(error))
            }
            
            callback(null)
        })
}

