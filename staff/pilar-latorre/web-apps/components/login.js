function mountLogin(selector, onLogin){

    var login = document.querySelector(selector)
    login.onsubmit = function (event) {
        event.preventDefault()

        var inputs = document.querySelectorAll('input')
    
        var email = inputs[4].value
        var password = inputs[5].value
        try {
        
            onLogin(email,password)
        } catch (error) {
            alert(error.message)
        }
    }
        
};