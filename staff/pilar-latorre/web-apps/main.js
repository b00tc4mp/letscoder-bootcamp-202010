//home

(function(){
    var title = document.querySelector('h1')

    title.onclick = function(){
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

            var register = document.querySelector('.registerPage')

            register.classList.remove('off')
        }
    })();

//user already register
(function () {
    var login = document.querySelector('.home__login')

    login.onclick = function(){

    var sections = document.querySelector('.home')

    sections.classList.add('off')

    var confirm = document.querySelector('.loginPage')

    confirm.classList.remove('off')

}

})();


// register
(function () {
    var register = document.querySelector('.userInfo')

    register.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        registerUser(fullname,email,password,repassword)

        var registerPage = document.querySelector('.registerPage')    

        registerPage.classList.add('off')

        var confirm = document.querySelector('.proceedtologin')

        confirm.classList.remove('off')
    }
})();

// register confirm
(function() {
    var login = document.querySelector('.login__confirm')

    login.onclick = function() {
        var confirm = document.querySelector('.proceedtologin')

        confirm.classList.add('off')

        var login = document.querySelector('.loginPage')

        login.classList.remove('off')
    }
})();
// login 
(function(){

    var login = document.querySelector('.login')

    login.onsubmit = function(event){   
        event.preventDefault()
        
        var inputs = document.querySelectorAll('input')
        

        var email = inputs[4].value
        var password = inputs[5].value

        authenticateUser(email,password)
         //if(users[0].email !== email) throw new Error ('this email do not match with any user')
        ///if(users[0].password !== password) throw new Error ('wrong password')
        
   
        var sections = document.querySelector('.loginPage')
            
        sections.classList.add('off')

        var welcome= document.querySelector('.welcomePage')

        welcome.classList.remove('off')
        
        var h1 = document.querySelector("h1")
        var hello = h1
        hello.classList.add('hello')


    }   
    

})();

//welcome page
/*(function(){
    var login = document.querySelectorAll("button")[4]

    login.onclick = (function(){
        
        
        var sections = document.querySelectorAll("section")
        var h1 = document.querySelector("h1")
        var hello = h1
        hello.classList.add('hello')

        var login = sections[3]

        login.classList.add('off')

        var welcome= sections[4]

        welcome.classList.remove('off')

    });


})();*/