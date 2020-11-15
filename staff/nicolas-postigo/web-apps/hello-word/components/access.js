function mountAccess(onRegister, OnLogin){
    var container = mountContainer(`<section class="access">
    <button class="access__register">Register</button> or <button class="access__login">Login</button>
</section>`)
    var register = container.querySelector(".access__register")

    register.onclick = onRegister

    var login = container.querySelector(".access__login")

    login.onclick = OnLogin

    return container
}