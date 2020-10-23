(function () {
    // title
   var title = mountTitle( function () {
        var sections = document.querySelectorAll('section')

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off')

        var access = document.querySelector('.access')

        access.classList.remove('off')
    })

    // access
     var access = mountAccess( function () {


        access.classList.add('off')
        register.classList.remove('off')
    }, function () {

        access.classList.add('off')
        login.classList.remove('off')
    })

    // register
    var register = mountRegister( function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword)


        register.classList.add('off')


        confirm.classList.remove('off')
    })

    // register confirm
    var confirm = mountRegisterConfirm(function () {


        confirm.classList.add('off')

 

        login.classList.remove('off')
    })

    // login
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password)


        login.classList.add('off')


        welcome.classList.remove('off')
    })


    //welcome

    var welcome = mountWelcome();
})();