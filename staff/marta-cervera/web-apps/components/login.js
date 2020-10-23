function mountLogin( selector, onLogin) {
    var login = document.querySelector(selector)

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
}