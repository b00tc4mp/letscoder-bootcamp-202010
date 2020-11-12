function mountLogin (onLogin){
    var container = mountContainer(`<section class="login">
    <h2>Login</h2>
    <form class="login__form">
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button>Login</button>
    </form>
</section>`)

    var form = container.querySelector(".login__form")
    form.onsubmit = function (event) {
        event.preventDefault()
        var inputs = form.querySelectorAll("input")
        var email = inputs[0].value
        var password = inputs[1].value
        try {
            onLogin(email, password)
        } catch (error) {
            alert(error.message)
        }
    }
    return container 
}
