function mountTitle(selector, onHome) {
    var title = document.querySelector(selector)

    title.onclick = onHome
}

// title
(function () {
    mountTitle('.title', function () {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')

        var home = document.querySelector('.home')

        home.classList.remove('off')
    })
})();

function mountHome(selector, onRegister, onLogin) {
    var home = document.querySelector(selector)

    var register = home.querySelector('.home__register')

    register.onclick = onRegister

    var login = home.querySelector('.home__login')

    login.onclick = onLogin
}

// home
(function () {
    mountHome('.home', function () {
        var home = document.querySelector('.home')

        home.classList.add('off')

        var register = document.querySelector('.register')

        register.classList.remove('off')
    }, function () {
        var home = document.querySelector('.home')

        home.classList.add('off')

        var login = document.querySelector('.login')

        login.classList.remove('off')
    })

    // NOTE reuse home panel for facebook links (register, login)
    mountHome('.home-2', function () {
        location.href = 'https://facebook.com/register'
    }, function () {
        location.href = 'https://facebook.com/login'
    })
})();

function mountRegister(selector, onRegister) {
    var register = document.querySelector(selector)

    var form = register.querySelector('.register__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        try {
            onRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message)
        }
    }
}

// register
(function () {
    mountRegister('.register', function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword)

        var register = document.querySelector('.register')

        register.classList.add('off')

        var confirm = document.querySelector('.register-confirm')

        confirm.classList.remove('off')
    })

    mountRegister('.register-2', function (fullname, email, password, repassword) {
        console.log(fullname, email, password, repassword)
    })
})();

// register confirm
(function () {
    var confirm = document.querySelector('.register-confirm')

    var login = confirm.querySelector('.register-confirm__login')

    login.onclick = function () {
        confirm.classList.add('off')

        var login = document.querySelector('.login')

        login.classList.remove('off')
    }
})();

// login
(function () {
    var login = document.querySelector('.login')

    var form = login.querySelector('.login__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var email = inputs[0].value
        var password = inputs[1].value

        try {
            authenticateUser(email, password)

            login.classList.add('off')

            var welcome = document.querySelector('.welcome')

            welcome.classList.remove('off')
        } catch (error) {
            alert(error.message)
        }
    }
})();