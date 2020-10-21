//Home

(function() {

    mountHome('.title', function() {

            var sections = document.querySelectorAll('section')
        
            for (var i = 0; i < sections.length; i++)
                sections[i].classList.add('off')
        
                sections[0].classList.remove('off')
    })






// options

    mountOptions ('.home', function () {
    
    var home = document.querySelector('.home')
    
    home.classList.add('off')
    
    var registerPage = document.querySelector('.registerPage')
    
    registerPage.classList.remove('off')

}, 

function() {
    
    var home = document.querySelector('.home')
    
    home.classList.add('off')

    var login = document.querySelector('.loginUser')
    login.classList.remove('off')
    })

// register

    mountRegister ('.registerPage', function (fullname, email, password, repassword) {

        registerUser(fullname, email, password, repassword)

        var registerPage = document.querySelector('.registerPage')

        registerPage.classList.add('off')

        var proceedLogin = document.querySelector('.registerConfirm')

        proceedLogin.classList.remove('off')
    });

// register confirm

    mountRegisterConfirm('.proceedLogin__loginButton', function(){
    
    var proceedLogin = document.querySelector('.registerConfirm')
    proceedLogin.classList.add('off')

    var login = document.querySelector('.loginUser')
    login.classList.remove('off')
});

// login

    
    mountLogin ('.login', function(email, password){
    
    authenticateUser(email, password)
    
    var login = document.querySelector('.loginUser')
            
    login.classList.add('off')
            
    var welcome = document.querySelector('.welcome')
            
    welcome.classList.remove('off')
    
    var title = document.querySelector('.title')
        
    var hello = title
    hello.classList.add('hello')

})

})()