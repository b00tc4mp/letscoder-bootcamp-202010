function authenticateUser(email, password, callback) {

    if (typeof email !== 'string') throw new TypeError(email + ' is not an e-mail')
    if (!email.trim().length) throw new Error('email is empty or blank')
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    
    if (typeof password !== 'string') throw new TypeError(password + ' is not a password')
    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof callback !== 'function') throw new TypeError (callback + ' is not a callback')
    
    
    
    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function() {
        if (this.readyState == 4)
        if (this.status === 200) {
            var response = JSON.parse(this.responseText)

            callback(undefined, response.token);
        } else {
            var response = JSON.parse(this.responseText)

                callback(new Error(response.error))
        }
    }   
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    
    xhr.setRequestHeader('Content-type', 'application/json')
    
    xhr.send('{"username": "' + email + '", "password": "' + password + '" }')
    
} 

