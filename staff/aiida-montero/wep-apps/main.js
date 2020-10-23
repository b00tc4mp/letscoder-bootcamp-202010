(function () {
    // title
    mountTitle('.title', function () {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')
        home.classList.remove('off')
    })

    // home
    var home = document.querySelector('.home')

    mountHome(home, function () {
        home.classList.add('off')

        register.classList.remove('off')
    }, function () {
        home.classList.add('off')

        login.classList.remove('off')
    })

    // register
    var register = document.querySelector('.register')

    mountRegister(register, function (fullname, email, password, repassword) {
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
    var confirm = document.querySelector('.register-confirm')

    mountRegisterConfirm(confirm, function () {
        confirm.classList.add('off')

        login.classList.remove('off')
    })

    // login
    var login = document.querySelector('.login')

    mountLogin(login, function (email, password) {
        authenticateUser(email, password, function(error, token) {
            if (error)
                alert(error.message)
            else {
                login.classList.add('off')
        
                var welcome = document.querySelector('.welcome')
        
                welcome.classList.remove('off')
            }
        })
    })
})();