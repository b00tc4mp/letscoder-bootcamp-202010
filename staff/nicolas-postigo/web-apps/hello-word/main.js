(function () {
    // root
    var root = document.getElementById("root")

    // title
    var title = mountTitle(function () {
        root.lastChild.replaceWith(access)
    })

    root.append(title)

    // access
    var access = mountAccess(function () {
        access.replaceWith(register)
    }, function () {
        access.replaceWith(login)
    })

    root.append(access)

    // register
    var register = mountRegister(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error)
                alert(error.message)
            else register.replaceWith(confirm)
        })
    })

    // register confirm
    var confirm = mountRegisterConfirm(function () {
        confirm.replaceWith(login)
    })

    // login
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password, function (error, token) {
            if (error)
                alert(error.message)
            else {
                // TODO call api to retrieve user, and then show welcome with user info
                retrieveUser(token, function(error, user){
                    if (error === null){
                        var name = user.name
                        welcome.innerHTML = '<h2>"Welcome ' + name + ' to Hello World App!"</h2>'
                    }

                  login.replaceWith(welcome)
                }
                
                  
                )}
            
            
        })
    });
    // welcome
    var welcome = mountWelcome() 
    
})();
