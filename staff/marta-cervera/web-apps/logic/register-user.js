function registerUser(fullname,email, password,repassword){
    if( typeof fullname!== "string") throw new TypeError ("fullname" + "is not a full name")

    if (!fullname.trim().length) throw new Error ('fullname is empty or blank')


    if (!email.trim().length) throw new Error ('email is empty or blank')

    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

    if(!password.trim().length) throw new Error ("password is empty or blank")

    if (!repassword.trim().length) throw new Error ("the repeation of password is empty or blank")

    var user = users.find(function(user) {
        return user.email === email

    })
    
    if (user) throw new Error( 'user already exists')
    
    user = {
        fullname: fullname,
        email: email,
        password: password
    }

    users.push(user)
}








