function mountHome(selector, onRegister, onLogin){ //se le da tres parametros X, le pasa los aprametros y le digo lo que tengo que hacer

    var home = document.querySelector(selector) 
    
    var register = home.querySelector(".home__register")
    
    register.onclick = onRegister

    var login= home.querySelector(".home__login")

    login.onclick= onLogin

}


///