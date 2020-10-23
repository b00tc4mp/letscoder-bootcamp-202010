function mountLogin(onLogin) {
    var temp = createElement("div")
    temp.innerHTML = ` <section class="login off">
    <h2>Login</h2>

    <form class="login__form">
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button>Login</button>
    </form>
</section>
`
    var container= temp.firstChild

    var form = login.querySelector (".login__form")

    form.onsubmit = function (event) {      // el onsubmit se dispara cuando todos los campos del formulario estan bien escritos
        event.preventDefault()

        var inputs = form.querySelectorAll("input")

        var email = inputs[0].value
        var password = inputs[1].value //para que acceda a lo de dentro hay que darle el value 

        try{
            onLogin(email, password)

        } catch(error){
            
            alert(error.message)
        }
    }
    return container
}