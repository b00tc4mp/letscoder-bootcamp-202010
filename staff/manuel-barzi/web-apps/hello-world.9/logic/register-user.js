function registerUser(fullname, email, password, repassword, callback) {
    if (typeof fullname !== 'string') throw new TypeError(fullname + ' is not a full name')

    if (!fullname.trim().length) throw new Error('full name is empty or blank')

    if (typeof email !== 'string') throw new TypeError(email + ' is not an e-mail')

    if (!email.trim().length) throw new Error('e-mail is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if (typeof password !== 'string') throw new TypeError(password + ' is not a password')

    if (!password.trim().length) throw new Error('password is empty or blank')

    if (typeof repassword !== 'string') throw new TypeError(repassword + ' is not a password repeat')

    if (!repassword.trim().length) throw new Error('password repeat is empty or blank')

    if (password !== repassword) throw new Error('passwords don\'t match')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')

    var xhr = new XMLHttpRequest

    xhr.onreadystatechange = function () {
        if (this.readyState == 4)
            if (this.status === 201)
                callback()
            else {
                var response = JSON.parse(this.responseText)

                callback(new Error(response.error))
            }
    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Content-type', 'application/json')

    xhr.send('{ "fullname": "' + fullname + '", "username": "' + email + '", "password": "' + password + '" }')
}