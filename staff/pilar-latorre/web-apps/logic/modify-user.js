function modifyUser(parameter,token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    //if (typeof parameter !== 'object') throw new TypeError(parameter + ' is not an object')
    
    call('PATCH',
    'https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization': 'Bearer ' + token,'Content-type': 'application/json'},
    parameter,
        function (status, response){
                if (status ===204){
                callback(null)
                }else{
                var res = JSON.parse(response)
                callback(new Error(res.error))

            }
        }
    )
}
    
/* 
    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status === 204) {
                callback()
            
            } else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))

            }
    }
    xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send(JSON.stringify(parameter))
}
 */