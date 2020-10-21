function mountLogin (selector, onRegister){
    var form = document.querySelector(selector);

    form.onsubmit = function(event) {

        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var email = inputs[4].value
        var password = inputs[5].value

        try { onRegister (email, password)
        } catch (error) {
            alert(error.message)
        }
    }
}