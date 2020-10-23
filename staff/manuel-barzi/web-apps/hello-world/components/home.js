function mountHome(container, onRegister, onLogin) {
    var register = container.querySelector('.home__register')

    register.onclick = onRegister

    var login = container.querySelector('.home__login')

    login.onclick = onLogin
}