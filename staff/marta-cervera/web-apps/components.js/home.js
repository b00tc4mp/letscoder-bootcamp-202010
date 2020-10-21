function mountHome(selector, onRegister, onLogin){

    var home= document.querySelector(selector)
    var register = home.querySelector(".home__register")
    register.onclick = onRegister

    var login= home.querySelector(".home__login")

    login.onclick= onLogin

}