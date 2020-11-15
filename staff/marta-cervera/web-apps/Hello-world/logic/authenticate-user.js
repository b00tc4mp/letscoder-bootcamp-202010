
function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not an e-mail')

    if (!email.trim().length) throw new Error('e-mail is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')



    call('POST',
        'https://b00tc4mp.herokuapp.com/api/v2/users/auth',
        { 'Content-type': 'application/json', 'Authorization': 'Bearer' },
        '{ "username": "' + email + '", "password": "' + password + '" }',
        
        function (status, response) {
            
            var res = JSON.parse(response)
            
            if (status === 200) {              
     
                callback(undefined, res.token)

            } else {
                

                callback(newEror(res.error))
            }
        }

    )

}

//callback se dice que queremos decir al cocinero lo que se quiera, pJSON parse es el plato, tambien tnego una callback, porqeue el chef tie
