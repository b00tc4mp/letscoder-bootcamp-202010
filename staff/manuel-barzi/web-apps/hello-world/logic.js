function registerUser(fullname, email, password, repassword) {
    if (!fullname.trim().length) throw new Error('full name is empty or blank')

    if (!email.trim().length) throw new Error('e-mail is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if (!password.trim().length) throw new Error('password is empty or blank')

    if (!repassword.trim().length) throw new Error('repeat password is empty or blank')

    if (password !== repassword) throw new Error('passwords do not match')

    var user = users.find(function (user) {
        return user.email === email
    })

    if (user) throw new Error('user already exists')

    user = {
        fullname: fullname,
        email: email,
        password: password
    }

    users.push(user)
}

function authenticateUser(email, password) {
    if (!email.trim().length) throw new Error('e-mail is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if (!password.trim().length) throw new Error('password is empty or blank')

    var user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (!user) throw new Error('wrong credentials')
}