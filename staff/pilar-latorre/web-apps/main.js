(function () {
    //title

    mountTitle('.title', function () {
        var sections = document.querySelectorAll('section');

        for (var i = 0; i < sections.length; i++)
            sections[i].classList.add('off');
;
        sections[0].classList.remove('off');

        var home = document.querySelector('.home');
        home.classList.remove('off');

    });


    // home


    mountHome('.home', function () {

        var home = document.querySelector('.home')
        home.classList.add('off')

        var register = document.querySelector('.registerPage')

        register.classList.remove('off')

    }, function () {
        var sections = document.querySelector('.home')

        sections.classList.add('off')

        var confirm = document.querySelector('.loginPage')

        confirm.classList.remove('off')
    })


    // register


    mountRegister('.userInfo', function (fullname, email, password, repassword) {

        registerUser(fullname, email, password, repassword)

        var registerPage = document.querySelector('.registerPage')

        registerPage.classList.add('off')

        var confirm = document.querySelector('.proceedtologin')

        confirm.classList.remove('off')

    })

    // register confirm

    mountRegisterConfirm('.login__confirm', function () {
        var confirm = document.querySelector('.proceedtologin')

        confirm.classList.add('off')

        var login = document.querySelector('.loginPage')

        login.classList.remove('off')

    })

    // login 

    
    mountLogin('.login',function(email,password){
            
            authenticateUser(email, password)


            var sections = document.querySelector('.loginPage')

            sections.classList.add('off')

            var welcome = document.querySelector('.welcomePage')

            welcome.classList.remove('off')

            var title = document.querySelector('.title')
            var hello = title
            hello.classList.add('hello')

    })


})();

