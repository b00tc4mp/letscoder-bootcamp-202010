
// title
(function() {
    var title = document.querySelector('.title')

    title.onclick = function() {
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

// register: mostart cuantro campos y dejar rellenarlos y pasarlo a la logica
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

        if (!fullname.trim().length) throw new Error('full name is empty or blank')

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

        if (!password.trim().length) throw new Error('password is empty or blank')

        if (!repassword.trim().length) throw new Error('repeat password is empty or blank')

        if (password !== repassword) throw new Error('passwords do not match')

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }

        // TODO check whether user already exists! in case yes, throw an error

        users.push(user)

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

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

        if (!password.trim().length) throw new Error('password is empty or blank')

        var user = users.find(function(user) {
            return user.email === email && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        login.classList.add('off')

        var welcome = document.querySelector('.welcome')

        welcome.classList.remove('off')
    }
})();




