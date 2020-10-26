function RegisterConfirm(onLogin) {
    Component.call(this, `<section class="register-confirm">
    User registered successfully, proceed to <button class="register-confirm__login">Login</button>.
</section>`)

    var login = this.container.querySelector('.register-confirm__login')

    // login.addEventListener('click', onLogin)
    login.onclick = onLogin
}

RegisterConfirm.prototype = Object.create(Component.prototype)
RegisterConfirm.prototype.constructor = RegisterConfirm