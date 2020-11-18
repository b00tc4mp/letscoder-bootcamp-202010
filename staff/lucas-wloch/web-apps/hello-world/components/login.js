function mountLogin(title,onLogin){
    var container = mountContainer(`<section class="login">
    <h2>`+title+`</h2>
    <h3 class="login__h3"></h3>
    <form class="login__form">
    <input class="login__email" type="email" name="email" placeholder="e-mail" required>
        <input class="login__password" type="password" name="password" placeholder="password" required>
        <button>`+title+`</button>
        </form>
        </section>`)
        
    var form = container.querySelector('.login__form');
    
    form.onsubmit = function(event){
        event.preventDefault();
        
        var inputs = form.querySelectorAll('input')
        var email = inputs[0].value;
        var password = inputs[1].value;
        
        try{
            onLogin(email,password);
            for(var i = 0; i < inputs.length; i++){
                inputs[i].value = '';
            }
            var reTry = container.querySelector('.login__h3');
            reTry.innerText = '';
        } catch (error) {
            var reTry = container.querySelector('.login__h3');
            reTry.innerText = error;
        };
    };
    return container;
}
