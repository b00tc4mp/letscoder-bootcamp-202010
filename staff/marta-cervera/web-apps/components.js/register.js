function mountRegister(selector, OnRegister) {
    var register = document.querySelector(selector)
    
    var form = register.querySelector(".register__form")

    form.onsubmit = function (event){
        event.preventDefault()

        var inputs = form.querySelectorAll("input")

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2]. value
        var repassword = inputs[3].value

        try {
            OnRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message)
        }
    }

}