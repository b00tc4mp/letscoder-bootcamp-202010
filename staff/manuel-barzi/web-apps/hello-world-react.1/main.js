(function () {
    // root
    var root = document.getElementById('root')

    // title
    var title = new Title(function () {
        root.lastChild.replaceWith(access.container)
    })

    root.append(title.container)

    // access
    var access = new Access(function () {
        access.replaceWith(register)
    }, function () {
        access.replaceWith(login)
    })

    root.append(access.container)

    // register
    var register = new Register(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error)
                alert(error.message)
            else register.replaceWith(confirm)
        })
    })

    // register confirm
    var confirm = new RegisterConfirm(function () {
        confirm.replaceWith(login)
    })

    // login
    var login = new Login(function (email, password) {
        authenticateUser(email, password, function (error, token) {
            if (error)
                alert(error.message)
            else {
                // TODO call api to retrieve user, and then show welcome with user info
                login.replaceWith(welcome)
            }
        })
    })

    // welcome
    var welcome = new Welcome()
})();