function mountRegisterConfirm(onClick) {
    var container = mountContainer(`<section class="registerConfirm off">
           User registered successfully, proceed to <button class="proceedLogin__loginButton">Login</button>.
       </section>`)
    

    var login = container.querySelector('.proceedLogin__loginButton')

    login.onclick = onClick

    return container
    }