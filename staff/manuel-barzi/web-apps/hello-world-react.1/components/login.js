function Login(onLogin) {
    Component.call(this, `<section class="login">
    <h2>Login</h2>

    <form class="login__form">
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button>Login</button>
    </form>
</section>`)

    var form = this.container.querySelector('.login__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        // var inputs = form.querySelectorAll('input')

        // var email = inputs[0].value
        // var password = inputs[1].value

        // 2
        // var email = this.email.value
        // var password = this.password.value

        //3
        var email = event.target.email.value
        var password = event.target.password.value

        try {
            onLogin(email, password)
        } catch (error) {
            alert(error.message)
        }
    }
}

Login.prototype = Object.create(Component.prototype)
Login.prototype.constructor = Login