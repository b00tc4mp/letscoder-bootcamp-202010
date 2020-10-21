(function() {

mountTitle('.title', function() {
    var sections = document.querySelectorAll('section');
    var home = document.querySelector('.user-action');
    for (var i = 0; i < sections.length; i++)
        sections[i].classList.add('hidden');
    home.classList.remove('hidden');
});

mountHome('.user-action', function() {
    var options = document.querySelector('.user-action');
    var register = document.querySelector('.user-register');
    options.classList.add('hidden');
    register.classList.remove('hidden');
}, function() {
    var options = document.querySelector('.user-action');
    var login = document.querySelector('.user-login');
    options.classList.add('hidden');
    login.classList.remove('hidden');
});

mountRegister('.user-register', function(fullname, email, password, repassword) {
    var register = document.querySelector('.user-register');
    var confirm = document.querySelector('.user-confirmation');
    registerUser(fullname, email, password, repassword);
    register.classList.add('hidden');
    confirm.classList.remove('hidden');
});

mountRegisterConfirm('.user-confirmation', function() {
    var confirm = document.querySelector('.user-confirmation');
    var login = document.querySelector('.user-login');

    confirm.classList.add('hidden');
    login.classList.remove('hidden');
});

mountLogin('.user-login', function(email, password) {
    var login = document.querySelector('.user-login');
    var app = document.querySelector('.web-app');
    authenticateUser(email, password);
    login.classList.add('hidden');
    app.classList.remove('hidden');
});

})();