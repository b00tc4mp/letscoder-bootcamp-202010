var users = []; 

//Home

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
        var register = document.querySelector('.home__register')

        register.onclick = function () {
            var home = document.querySelector('.home')

            home.classList.add('off')

            var registerPage = document.querySelector('.registerPage')

            registerPage.classList.remove('off')
        }
    })();
    //User already registered, go to login
    (function (){
        var login = document.querySelector('.home__login')

        login.onclick = function (){
            var home = document.querySelector('.home')

            home.classList.add('off')

            var login = document.querySelector('.loginUser')
            login.classList.remove('off')


        }
    
    })();

// register
(function () {
    var register = document.querySelector('.registerPage')

    var form = document.querySelector('.registerPage__registerUser')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value


        registerUser(fullname, email, password, repassword)

        var registerPage = document.querySelector('.registerPage')

        registerPage.classList.add('off')

        var proceedLogin = document.querySelector('.proceedLogin')

        proceedLogin.classList.remove('off')
    }
})();

// register confirm
(function() {
    var login = document.querySelector('.proceedLogin__loginButton')

    login.onclick = function() {
        var proceedLogin = document.querySelector('.proceedLogin')
        proceedLogin.classList.add('off')

        var login = document.querySelector('.loginUser')
        login.classList.remove('off')
    }
})();

// login
(function(){

    var form = document.querySelector('.login');

    form.onsubmit = function(event) {

        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var email = inputs[4].value
        var password = inputs[5].value

        authenticateUser(email, password)

        var login = document.querySelector('.loginUser')
                
        login.classList.add('off')
                
        var welcome = document.querySelector('.welcome')
                
        welcome.classList.remove('off')

        
 
        var h1 = document.querySelector('h1')
            
        var hello = h1
        hello.classList.add('hello')
    }
})();