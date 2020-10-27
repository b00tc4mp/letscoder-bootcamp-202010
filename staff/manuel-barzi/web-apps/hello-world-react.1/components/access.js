function Access(onRegister, onLogin) {
    Component.call(this, `<section class="access">
    <button class="access__register">Register</button> or <button class="access__login">Login</button>
</section>`)

    var register = this.container.querySelector('.access__register')

    register.onclick = onRegister

    var login = this.container.querySelector('.access__login')

    login.onclick = onLogin
}

Access.prototype = Object.create(Component.prototype)
Access.prototype.constructor = Access