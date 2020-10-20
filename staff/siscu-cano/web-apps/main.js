var users = [];

// Options (register or login)
(function() {
    var buttons = document.querySelectorAll('button');
    var register = buttons[0];
    var login = buttons[1];
    register.onclick = function() {
        var options = document.querySelector('section');
        var register = document.querySelectorAll('section')[1];
        options.classList.add('hidden');
        register.classList.remove('hidden');
    }
    login.onclick = function() {
        var options = document.querySelector('section');
        var login = document.querySelectorAll('section')[3];
        options.classList.add('hidden');
        login.classList.remove('hidden');
    }
})();

// Register
(function() {
    var register = document.querySelector('form');

    register.onsubmit = function(event) {
        event.preventDefault();
        var inputs = document.querySelectorAll('input');
        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;
        var sections = document.querySelectorAll('section');
        var register = sections[1];
        var confirm = sections[2];

        if (!fullname.trim().length) throw new Error('full name is empty or blank');
        if (!email.trim().length) throw new Error('e-mail is empty or blank');
        if (!password.trim().length) throw new Error('password is empty or blank');
        if (!repassword.trim().length) throw new Error('repeat password is empty or blank');
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail');
        if (password !== repassword) throw new Error('passwords do not match');

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }
        users.push(user);
        register.classList.add('hidden');
        confirm.classList.remove('hidden');
    }
})();

// Register confirm
(function() {
    var login = document.querySelectorAll('button')[3];

    login.onclick = function() {
        var sections = document.querySelectorAll('section');
        var confirm = sections[2];
        var login = sections[3];
        confirm.classList.add('hidden');
        login.classList.remove('hidden');
    }
})();

// Login
(function() {
    var login = document.querySelectorAll('form')[1];
    login.onsubmit = function(event) {
        event.preventDefault();
        var input = document.querySelectorAll('input');
        var email = input[4].value;
        var password = input[5].value;

        if (!email.trim().length) throw new Error('e-mail is empty or blank')
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')

        var userFound = users.find(
            function(user) {
                return user.email === email && user.password === password;
            });
        if (userFound) {
            var sections = document.querySelectorAll('section');
            var login = sections[3];
            var app = sections[4];
            login.classList.add('hidden')
            app.classList.remove('hidden');
        } else {
            throw new Error('Email not registered or password is wrong!');
        }
    }

})();