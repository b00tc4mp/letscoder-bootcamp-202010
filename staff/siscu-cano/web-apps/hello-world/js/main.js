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
            if (error) {
                var errorMessage = showErrorMessage(error.message);
                root.appendChild(errorMessage);
            }
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
            if (error) {
                var errorMessage = showErrorMessage(error.message);
                root.appendChild(errorMessage);
            } else {
                retrieveUser(token, function (error, response) {
                    if (!error) {
                        login.replaceWith(mountWelcome(response.username));
                    } else {
                        var errorMessage = showErrorMessage(error.message);
                        root.appendChild(errorMessage);
                    }
                })
            }
        })
    })


})();