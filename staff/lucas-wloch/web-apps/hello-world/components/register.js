function mountRegister(selector,onRegister){
    var register = document.querySelector(selector)
    var form = document.querySelector('.register__form');

    form.onsubmit = function(event){
        event.preventDefault();

        var inputs = form.querySelectorAll('input');

        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;
    
        try{
            onRegister(fullname,email,password,repassword);
        } catch (error){
            
            var _error = document.querySelector('.register__h3');
            _error.innerText = error;
            _error.classList.remove('off');
        };
    };
}