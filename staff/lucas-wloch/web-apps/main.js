var users = [];

//Panel Options 
//al elegir register muestra el panel de registro y oculta el de options
//al elegir login muestra el panel de login y oculta el de options
(function(){
    var sections = document.querySelectorAll('section')

    var register = document.querySelector('button')
    register.onclick = function() {
        var options = sections[0]
        options.classList.add('off')

        var register = sections[1]
        register.classList.remove('off')
    }
    
    var login = document.querySelectorAll('button')[1]
    login.onclick = function(){
        var options = sections[0]
        options.classList.add('off')

        var login = sections[3]
        login.classList.remove('off')
    }
})();


//panel de registro.. 
//al rellenar todos los campos y darle register se cargara un nuevo usuario en users
//tambien se ocultara este panel y se mostrara el panel de registrado exitosamente
(function(){
    var register = document.querySelectorAll('form')[0]

    register.onsubmit = function(event){
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        if(!fullname.trim().length) throw new Error('full name is empty or blank');
        if(!email.trim().length) throw new Error('e-mail is empty or blank');
        if(!password.trim().length) throw new Error('password is empty or blank');
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
        if(!repassword.trim().length) throw new Error('paswords do not match')

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }
        users.push(user);

        var sections = document.querySelectorAll('section')
        var register = sections[1]
        register.classList.add('off')
        var confirm = sections[2]
        confirm.classList.remove('off')
    }
})();

//Register Corfirm panel
//este panel muestra que te registraste correctamente y tiene un boton para ir al panel de login
(function(){
    var login = document.querySelectorAll('button')[3]

    login.onclick = function(){
        var sections = document.querySelectorAll('section')
        var confirm = sections[2]
        confirm.classList.add('off')
        var login = sections[3]
        login.classList.remove('off')
    }
})();

//Login Panel
//al rellenar todos los campos y darle logi se comprobara si el usuario esta registrado
//si el usuario se registro previamente tambien se ocultara este panel y se mostrara la pantalla de bienbenido a Hello World App
(function(){
    var login = document.querySelectorAll('form')[1]

    login.onsubmit = function(event){
        event.preventDefault()
        var inputs = document.querySelectorAll('input')

        var email = inputs[4].value
        var password = inputs[5].value

        var checkUser = users.find(function(user){
            return user.email === email && user.password === password
        })
        if(checkUser !== undefined){
            var sections = document.querySelectorAll('section')
            var login = sections[3]
            login.classList.add('off')
            var welcome = sections[4]
            welcome.classList.remove('off')
            var text = document.querySelectorAll('h3')[1]
            text.innerText = 'Bienvenido ' + checkUser.fullname + ', que bueno volver a verte.'
            text.classList.remove('off')
        } else {
            var reTry = document.querySelector('h3')
            reTry.classList.remove('off')
        }
    }

})();

