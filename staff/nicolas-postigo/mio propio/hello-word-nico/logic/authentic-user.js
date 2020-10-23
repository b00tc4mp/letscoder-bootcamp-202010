function authenticateUser(email, password){
    if (!email.trim().length) throw new Error ("e-mail is empry ot blanck")
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
    if (!password.trim().length) throw new Error ("password is empry or empty")

    var user = users.find(function(user){
            return user.email === email && user.password === password
    })
    if (!user) throw new Error("wrong credentials")
    return user
}
