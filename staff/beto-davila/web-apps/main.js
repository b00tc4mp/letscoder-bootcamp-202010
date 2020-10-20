var users = [];

// Options
(function() {
    var register = document.querySelectorAll('button')[0];

    register.onclick = function() {
        var options = document.querySelector('section');

        options.classList.add('off');

        var register = document.querySelectorAll('section')[1];

        register.classList.remove('off');
    }
}
)();

// Register
(function() {
    var register = document.querySelector('form');

    register.onsubmit = function(event) {
        event.preventDefault(); // Clicking on the submit button, prevents it from submitting a form

        var inputs = document.querySelectorAll('input');

        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;

        if (!fullname.trim().length) throw new Error('full name is empty or blank');

        if (!email.trim().length) throw new Error('email is empty or blank');

        if (!password.trim().length) throw new Error('password is empty or blank');

        if (!repassword.trim().length) throw new Error('repeat password is empty or blank');

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail');

        if (password !== repassword) throw new Error('passwords do not match');
        
        var user = {
            fullname: fullname,
            email: email,
            password: password
        };

        users.push(user);

        var sections = document.querySelectorAll('section');

        var register = sections[1];

        register.classList.add('off');

        var confirm = sections[2];

        confirm.classList.remove('off');
    }
})();

// register confirm
(function() {
    
    var login = document.querySelectorAll('button')[3];

    login.onclick = function() {
        var sections = document.querySelectorAll('section');

        var confirm = sections[2];

        confirm.classList.add('off');

        var welcome = sections[3];

        welcome.classList.remove('off');
    }
})();

// Login page
(function() {
    
    var login = document.querySelectorAll('button')[1];

    login.onclick = function() {

        var sections = document.querySelectorAll('section');

        var loginScreen = sections[2];

        loginScreen.classList.remove('off');

        var options = sections[0];

        options.classList.add('off');
    }

})();

// Logged in
(function() {
    
    var welcome = document.querySelectorAll('section')[3];
    var errorLogin = document.querySelectorAll('section')[4];
    var login = document.querySelectorAll('form')[1];

    login.onsubmit = function(event) {
        event.preventDefault();
        var input = document.querySelectorAll('input');
        var email = input[4].value;
        var password = input[5].value;
        var result;

        if (!email.trim().length) throw new Error('email is empty or blank');
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail');
        if (!password.trim().length) throw new Error('password is empty or blank');

        result = users.find(function(user) {return user.email === email && user.password === password});
        //console.log('the result is:', result);

        if (result) {
            welcome.classList.remove('off');
        } else{
            welcome.classList.add('off');
            errorLogin.classList.remove('off');
        }

    }
    
})();