function mountRegister(onRegister){
    var container = mountContainer(`<section class="register">
    <h2>Register</h2>
    <h3 class="register__h3"></h3>
    <form class="register__form">
        <input class="register__name" type="text" name="fullname" placeholder="full name" required>
        <input class="register__email" type="email" name="email" placeholder="e-mail" required>
        <input class="register__password" type="password" name="password" placeholder="password" required>
        <input class="register__repassword" type="password" name="repassword" placeholder="repeat password" required>
        <button>Register</button>
    </form>
</section>`);
    
    var form = container.querySelector('.register__form');

    form.onsubmit = function(event){
        event.preventDefault();

        var inputs = form.querySelectorAll('input');

        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;
    
        try{
            onRegister(fullname,email,password,repassword);
            for(var i = 0; i < inputs.length; i++){
                inputs[i].value = '';
            }
            var _error = container.querySelector('.register__h3');
            _error.innertext = '';
        } catch (error){
            
            var _error = container.querySelector('.register__h3');
            _error.innerText = error;
        };
    };
    return container;
}