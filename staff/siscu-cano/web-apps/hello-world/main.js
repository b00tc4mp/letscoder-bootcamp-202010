// On click in title go to user action
(function() {
    var sections = document.querySelectorAll('section');
    var title = document.querySelector('.title');
    var home = document.querySelector('.user-action');

    title.onclick = function() {
        for (var i = 0; i < sections.length; i++) sections[i].classList.add('hidden');
        home.classList.remove('hidden');
    }
})();

// Register & login button actions
(function() {

    var registerBtn = document.querySelector('.user-action__register');
    var loginBtn = document.querySelector('.user-action__login');
    var options = document.querySelector('.user-action');
    var register = document.querySelector('.user-register');
    var login = document.querySelector('.user-login');

    registerBtn.onclick = function() {
        options.classList.add('hidden');
        register.classList.remove('hidden');
    }

    loginBtn.onclick = function() {
        options.classList.add('hidden');
        login.classList.remove('hidden');
    }
})();

// Register
(function() {
    var registerForm = document.querySelector('.user-register__form');
    var register = document.querySelector('.user-register');
    var confirm = document.querySelector('.user-confirmation');

    registerForm.onsubmit = function(event) {
        var fullname = document.querySelector('.user-register__fullname').value;
        var email = document.querySelector('.user-register__email').value;
        var password = document.querySelector('.user-register__password').value;
        var repassword = document.querySelector('.user-register__repassword').value;

        event.preventDefault();
        registerUser(fullname, email, password, repassword);

        register.classList.add('hidden');
        confirm.classList.remove('hidden');
    }
})();

// Register confirm
(function() {
    var loginBtn = document.querySelector('.user-confirmation__login');
    var confirm = document.querySelector('.user-confirmation');
    var login = document.querySelector('.user-login');

    loginBtn.onclick = function() {
        confirm.classList.add('hidden');
        login.classList.remove('hidden');
    }
})();

// Login
(function() {
    var login = document.querySelector('.user-login__form');

    login.onsubmit = function(event) {
        var email = document.querySelector('.user-login__email').value;
        var password = document.querySelector('.user-login__password').value;
        var login = document.querySelector('.user-login');
        var app = document.querySelector('.web-app');
        event.preventDefault();

        authenticateUser(email, password);

        login.classList.add('hidden');
        app.classList.remove('hidden');
    }

})();