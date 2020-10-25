function unregisterUser(password,token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    
    call('DELETE',
    'https://b00tc4mp.herokuapp.com/api/v2/users',
    {'Authorization': 'Bearer ' + token,'Content-type': 'application/json'},
    '{ "password": "' + password + '"}',
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
    
    
    
    /* var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status === 204) {
                callback(null)
            
            } else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))

            }
    }
    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-type', 'application/json')

    
    xhr.send('{ "password": "' + password + '"}')
}
 */