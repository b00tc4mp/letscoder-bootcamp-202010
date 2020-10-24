function mountAccess(onRegister, onLogin) {

    var temp = document.createElement('div')

    temp.innerHTML = ` <section class="access">
    <button class="home__register">Register</button> or <button class="home__login">Login</button>
</section>`
 
    var container = temp.firstChild 

    var register = container.querySelector('.access__register')

    register.onclick = onRegister

    var login = container.querySelector('.acess_login')

    login.onclick = onLogin

    return container
}