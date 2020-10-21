function mountLogin(selector, onLogin){
    var login = document.querySelector(selector);
    var form = document.querySelector('.login__form');

    form.onsubmit = function(event){
        event.preventDefault();

        var inputs = form.querySelectorAll('input')
        var email = inputs[0].value;
        var password = inputs[1].value;
        
        try{
            onLogin(email,password);

        } catch (error) {
            var reTry = document.querySelector('.login__h3');
            reTry.innerText = error;
            reTry.classList.remove('off');
        };
    };
}
