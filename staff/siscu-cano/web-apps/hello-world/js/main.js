(function () {
    // root
    var root = document.getElementById('root')

    // title
    var title = mountTitle(function () {
        root.lastChild.replaceWith(access)
    })

    root.append(title)

    // access
    var access = mountAccess(function () {
        access.replaceWith(register)
    }, function () {
        access.replaceWith(login)
    })

    root.append(access)

    // register
    var register = mountRegister(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error)
                alert(error.message)
            else register.replaceWith(confirm)
        })
    })

    // register confirm
    var confirm = mountRegisterConfirm(function () {
        confirm.replaceWith(login)
    })

    // login
    var login = mountLogin(function (email, password) {
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
    var welcome = mountWelcome()
})();


// (function() {

// mountTitle('.title', function() {
//     var sections = document.querySelectorAll('section');
//     var home = document.querySelector('.access');
//     for (var i = 0; i < sections.length; i++)
//         sections[i].classList.add('hidden');
//     home.classList.remove('hidden');
// });

// mountHome('.access', function() {
//     var options = document.querySelector('.access');
//     var register = document.querySelector('.register');
//     options.classList.add('hidden');
//     register.classList.remove('hidden');
// }, function() {
//     var options = document.querySelector('.access');
//     var login = document.querySelector('.login');
//     options.classList.add('hidden');
//     login.classList.remove('hidden');
// });

// mountRegister('.register', function(fullname, email, password, repassword) {
//     var register = document.querySelector('.register');
//     var confirm = document.querySelector('.register-confirm');
//     registerUser(fullname, email, password, repassword);
//     register.classList.add('hidden');
//     confirm.classList.remove('hidden');
// });

// mountRegisterConfirm('.register-confirm', function() {
//     var confirm = document.querySelector('.register-confirm');
//     var login = document.querySelector('.login');

//     confirm.classList.add('hidden');
//     login.classList.remove('hidden');
// });

// mountLogin('.login', function(email, password) {
//     var login = document.querySelector('.login');
//     var app = document.querySelector('.web-app');
//     authenticateUser(email, password);
//     login.classList.add('hidden');
//     app.classList.remove('hidden');
// });

// })();