function mountAccess(selector, onRegister, onLogin){
    var access = document.querySelector(selector);

    var register = access.querySelector('.access__register');
    register.onclick = onRegister;
   

    var login = access.querySelector('.access__login');

    login.onclick = onLogin;

}

    
    

    


