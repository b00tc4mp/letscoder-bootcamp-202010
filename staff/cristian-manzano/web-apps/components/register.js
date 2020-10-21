function mountRegister (selector, onRegister) {

    var register = document.querySelector(selector)

    register.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        try { onRegister (fullname, email, password, repassword)
        } catch (error) {
            alert(error.message)
        }     
    }        
}