(function () {
    // root

    var root = document.getElementById('root')
    
    //title

    var title = mountTitle( function () {
        root.lastChild.replaceWith(access)

    });

    root.append(title)


    // access


    var access = mountAccess(function () {
        access.replaceWith(register)
    }, function(){
        access.replaceWith(login)
    })

    root.append(access)
       


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

