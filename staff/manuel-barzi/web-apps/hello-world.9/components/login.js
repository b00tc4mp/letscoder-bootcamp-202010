function mountLogin(container, onLogin) {
    var form = container.querySelector('.login__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var email = inputs[0].value
        var password = inputs[1].value

        try {
            onLogin(email, password)
        } catch (error) {
            alert(error.message)
        }
    }
}