function mountAccess(onRegister, onLogin){ //se le da tres parametros X, le pasa los aprametros y le digo lo que tengo que hacer

    var container= mountContainer(`<section class="access">
        <button class="access__register">Register</button> or <button class="access__login">Login</button>
        </section>`) 
      var register = container.querySelector(".acces__register")
        register.onclick = onRegister

    var login= container.querySelector(".access__login")
        login.onclick= onLogin
 
        return container
}


///



