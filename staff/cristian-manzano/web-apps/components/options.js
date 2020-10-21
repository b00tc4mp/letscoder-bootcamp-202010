function mountOptions (selector, onRegister, onLogin) {
        var home = document.querySelector(selector)
        var register = document.querySelector('.home__register')

        register.onclick = onRegister
        
        var login = document.querySelector('.home__login')
        
        login.onclick = onLogin
        }