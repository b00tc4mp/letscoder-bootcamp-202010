function mountRegisterConfirm(onLogin) {
    var temp = document.createElement('div')

    temp.innerHTML = `<section class="register-confirm off">
    User registered successfully, proceed to <button class="register-confirm__login">Login</button>.
</section>`

     var container = temp.firstChild

     var login = container.querySelector('.register-confirm_login')

    login.onclick = onLogin

    return container
}