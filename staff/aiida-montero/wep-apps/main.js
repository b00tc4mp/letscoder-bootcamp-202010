(function () {
    // root
    var root = document.getElementById('root')

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
            else {
                register.classList.add('off')

                confirm.classList.remove('off')
            }
        })
    })

    // register confirm
    var confirm = mountRegisterConfirm(function () {
        confirm.classList.add('off')

        login.classList.remove('off')
    })

    // login
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password, function(error, token) {
            if (error)
                alert(error.message)
            else {
                login.classList.add('off')
        
                welcome.classList.remove('off')
            }
        })
    })

    // welcome
    var welcome = mountWelcome()
})();