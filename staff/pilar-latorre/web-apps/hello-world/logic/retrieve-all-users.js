function retrieveAllUsers(token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    
    var xhr = new XMLHttpRequest

    call('GET',
    'https://b00tc4mp.herokuapp.com/api/v2/users/all',
    {'Authorization': 'Bearer ' + token},
    '',
        function (status, response){
                if (status ===200){
                var resText = JSON.parse(response)
                callback(null, resText)
                }else{
                var res = JSON.parse(response)
                callback(new Error(res.error))

            }
        }
    )
}


   /*  xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status === 200) {
                var response = JSON.parse(this.responseText)

                callback(null, response)
            } else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))

            }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users/all')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}
 */
