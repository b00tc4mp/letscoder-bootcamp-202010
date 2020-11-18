function mountRegisterConfirm (onLogin){
    var container = mountContainer (`<section class="proceedtologin">
    User registered successfully, proceed to <button class="login__confirm">Login</button>.
</section>`)

    var login = container.querySelector('.login__confirm')

    login.onclick = onLogin

    return container
        
}