function mountHome(selector, onRegister, onLogin){

    var home = document.querySelector(selector) //recupera el documetno del DOM
    
    var register = home.querySelector(".home__register")
    
    register.onclick = onRegister

    var login= home.querySelector(".home__login")

    login.onclick= onLogin

}