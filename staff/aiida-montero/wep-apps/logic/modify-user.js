

function modifyUser(changes,token,callback) {

    if(typeof changes !== 'object') throw new TypeError ('changes:'+ changes +' is not a object')
    
    if (typeof token !== 'string') throw new TypeError('token:'+ token +'is not a string')

    if( typeof callback !== 'function') throw new TypeError(callback + 'is not a callback')
    var xhr = new XMLHttpRequest
    
    xhr.onreadystatechange = function(){
        if(this.readyState == 4)
        if(this.status === 204)

        callback()

        else{
            var response = JSON.parse(this.responseText)

            callback( new Error(response.error))
        
        }
    }
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users/')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.setRequestHeader('Content-type', 'application/json')



    xhr.send(JSON.stringify(changes))

    console.log(changes) }