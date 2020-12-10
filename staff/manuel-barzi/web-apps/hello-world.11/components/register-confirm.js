function mountRegisterConfirm(onLogin) {
    var container = mountContainer(`<section class="register-confirm">
    User registered successfully, proceed to <button class="register-confirm__login">Login</button>.
</section>`)

    var login = container.querySelector('.register-confirm__login')

    // login.addEventListener('click', onLogin)
    login.onclick = onLogin

    return container
}