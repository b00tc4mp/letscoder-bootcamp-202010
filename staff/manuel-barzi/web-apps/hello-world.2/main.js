var users = [{ fullname: 'Pepito Grillo', email: 'pepigri@mail.com', password: '123123123' }];

// home
(function() {
    var title = document.querySelector('h1')

    title.onclick = function() {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')

        sections[0].classList.remove('off')
    }
})();

// options
(function () {
    var buttons = document.querySelectorAll('button')
    
    var register = buttons[0]

    register.onclick = function () {
        var options = document.querySelector('section')

        options.classList.add('off')

        var register = document.querySelectorAll('section')[1]

        register.classList.remove('off')
    }

    var login = buttons[1]

    login.onclick = function () {
        var options = document.querySelector('section')

        options.classList.add('off')

        var login = document.querySelectorAll('section')[3]

        login.classList.remove('off')
    }
})();

// register
(function () {
    var register = document.querySelector('form')

    register.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

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

        users.push(user)

        var sections = document.querySelectorAll('section')

        var register = sections[1]

        register.classList.add('off')

        var confirm = sections[2]

        confirm.classList.remove('off')
    }
})();

// register confirm
(function () {
    var login = document.querySelectorAll('button')[3]

    login.onclick = function () {
        var sections = document.querySelectorAll('section')

        var confirm = sections[2]

        confirm.classList.add('off')

        var login = sections[3]

        login.classList.remove('off')
    }
})();

// login
(function () {
    var login = document.querySelectorAll('form')[1]

    login.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var email = inputs[4].value
        var password = inputs[5].value

        if (!email.trim().length) throw new Error('e-mail is empty or blank')

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

        if (!password.trim().length) throw new Error('password is empty or blank')

        var user = users.find(function(user) {
            return user.email === email && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        var sections = document.querySelectorAll('section')

        var login = sections[3]

        login.classList.add('off')

        var welcome = sections[4]

        welcome.classList.remove('off')
    }
})();