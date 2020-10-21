// home
(function () {
    var title = document.querySelector('.title')

    title.onclick = function () {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')

        var home = document.querySelector('.home')

        home.classList.remove('off')
    }
})();

// home
(function () {
    var home = document.querySelector('.home')

    var register = home.querySelector('.home__register')

    register.onclick = function () {
        home.classList.add('off')

        var register = document.querySelector('.register')

        register.classList.remove('off')
    }

    var login = home.querySelector('.home__login')

    login.onclick = function () {
        home.classList.add('off')

        var login = document.querySelector('.login')

        login.classList.remove('off')
    }
})();

// register
(function () {
    var register = document.querySelector('.register')

    var form = register.querySelector('.register__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        registerUser(fullname, email, password, repassword)

        register.classList.add('off')

        var confirm = document.querySelector('.register-confirm')

        confirm.classList.remove('off')
    }
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

        authenticateUser(email, password)

        login.classList.add('off')

        var welcome = document.querySelector('.welcome')

        welcome.classList.remove('off')
    }
})();