(function(){
    function limpiarLogin(){
        /// vacio los campos luego de autentificar al user 
        var form = document.querySelector('.login__form');
        var inputs = form.querySelectorAll('input');
        for(var i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
        var _error = document.querySelector('.login__h3');
        _error.innerHTML = '';
    }
    function limpiarRegister(){
        var form = document.querySelector('.register__form');
        var inputs = form.querySelectorAll('input');
        for(var i = 0; i < inputs.length; i++){
            inputs[i].value = '';
        }
        var _error = document.querySelector('.register__h3');
        _error.innerText = '';
    }
    //title 
    mountTitle('.title',function(){
        var sections = document.querySelectorAll('section');
    
        for(var i=0; i < sections.length; i++){
            sections[i].classList.add('off');
        };
        var home = document.querySelector('.home');
        home.classList.remove('off');
        
        limpiarLogin();
        limpiarRegister();
        
    })
    
    
    //Panel Options (home)
    //al elegir register muestra el panel de registro y oculta el de options
    //al elegir login muestra el panel de login y oculta el de options
    
        
    mountHome('.home',function(){
        var home = document.querySelector('.home');
        home.classList.add('off');
    
        var register = document.querySelector('.register');
        register.classList.remove('off');
    },function(){
        var home = document.querySelector('.home');
        home.classList.add('off');
    
        var login = document.querySelector('.login');
        login.classList.remove('off');
    });
    
    
    
    //panel de registro.. 
    //al rellenar todos los campos y darle register se cargara un nuevo usuario en users
    //tambien se ocultara este panel y se mostrara el panel de registrado exitosamente
    
        
    mountRegister('.register', function(fullname,email,password,repassword){
        registerUser(fullname,email,password,repassword);
    
        var register = document.querySelector('.register');
        register.classList.add('off');
        var confirm = document.querySelector('.confirm');
        confirm.classList.remove('off');
        
        limpiarRegister();
    });
    
    
    //Register Corfirm panel
    //este panel muestra que te registraste correctamente y tiene un boton para ir al panel de login
    
    mountRegisterConfirm('.confirm', function(){
        var confirm = document.querySelector('.confirm');
        confirm.classList.add('off');
        var login = document.querySelector('.login');
        login.classList.remove('off');
    })
    
    
    
    //Login Panel
    //al rellenar todos los campos y darle logi se comprobara si el usuario esta registrado
    //si el usuario se registro previamente tambien se ocultara este panel y se mostrara la pantalla de bienbenido a Hello World App
    
        
    mountLogin('.login', function(email,password){
        var user = authenticateUser(email,password);
            
        var login = document.querySelector('.login');
        login.classList.add('off');
        var welcome = document.querySelector('.welcome');
        welcome.classList.remove('off');
        var text = document.querySelector('.welcome__h3');
        text.innerText = 'Welcome ' + user.fullname + ', good to see you again!';
        text.classList.remove('off');
        
        limpiarLogin();
    })
    
})();    

