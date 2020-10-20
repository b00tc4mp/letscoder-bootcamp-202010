
//Home
(function(){
    var title = document.querySelector('.title')
    title.onclick = function(){
        var sections = document.querySelectorAll('section')

        for(var i=0; i < sections.length; i++){
            sections[i].classList.add('off')
        }
        var options = document.querySelector('.options')
        options.classList.remove('off')
    }

})();

//Panel Options 
//al elegir register muestra el panel de registro y oculta el de options
//al elegir login muestra el panel de login y oculta el de options
(function(){
    var register = document.querySelector('.options__register')
    register.onclick = function() {
        var options = document.querySelector('.options')
        options.classList.add('off')

        var register = document.querySelector('.register')
        register.classList.remove('off')
    }
    
    var login = document.querySelector('.options__login')
    login.onclick = function(){
        var options = document.querySelector('.options')
        options.classList.add('off')

        var login = document.querySelector('.login')
        login.classList.remove('off')
    }
})();


//panel de registro.. 
//al rellenar todos los campos y darle register se cargara un nuevo usuario en users
//tambien se ocultara este panel y se mostrara el panel de registrado exitosamente
(function(){
    var register = document.querySelector('.register__form')

    register.onsubmit = function(event){
        event.preventDefault()

        var fullname = document.querySelector('.register__name').value
        var email = document.querySelector('.register__email').value
        var password = document.querySelector('.register__password').value
        var repassword = document.querySelector('.register__repassword').value

        registerUser(fullname,email,password,repassword)

        var register = document.querySelector('.register')
        register.classList.add('off')
        var confirm = document.querySelector('.confirm')
        confirm.classList.remove('off')
    }
})();

//Register Corfirm panel
//este panel muestra que te registraste correctamente y tiene un boton para ir al panel de login
(function(){
    var login = document.querySelector('.confirm__login')

    login.onclick = function(){
        var confirm = document.querySelector('.confirm')
        confirm.classList.add('off')
        var login = document.querySelector('.login')
        login.classList.remove('off')
    }
})();

//Login Panel
//al rellenar todos los campos y darle logi se comprobara si el usuario esta registrado
//si el usuario se registro previamente tambien se ocultara este panel y se mostrara la pantalla de bienbenido a Hello World App
(function(){
    var login = document.querySelector('.login__form')

    login.onsubmit = function(event){
        event.preventDefault()

        var email = document.querySelector('.login__email').value
        var password = document.querySelector('.login__password').value
        
        authenticateUser(email,password)

        var login = document.querySelector('.login')
        login.classList.add('off')
        var welcome = document.querySelector('.welcome')
        welcome.classList.remove('off')
       
        // if(authenticateUser(email,password)){
        //     var login = document.querySelector('.login')
        //     login.classList.add('off')
        //     var welcome = document.querySelector('.welcome')
        //     welcome.classList.remove('off')
        //     var text = document.querySelector('.welcome__h3')
        //     text.innerText = 'Welcome ' + user.fullname + ', good to see you again.'
        //     text.classList.remove('off')
        // } else {
        //     var reTry = document.querySelector('.login__h3')
        //     reTry.classList.remove('off')
        // }
    }

})();

