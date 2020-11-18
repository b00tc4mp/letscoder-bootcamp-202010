function retrieveAnotherUser(idUser,token, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')
    
    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    call('GET',
    'https://b00tc4mp.herokuapp.com/api/v2/users/'+ idUser,
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

  /*   var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status === 200) {
                var response = JSON.parse(this.responseText)

                callback(null, response)
            } else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))

            }
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users/'+ idUser)

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
} */

