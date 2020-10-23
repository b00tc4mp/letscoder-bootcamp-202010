function mountLogin(onLogin) {
    var container = mountContainer(`<section class="login">
    <h2 class="sub-title">Login</h2>

    <form class="login__form">
        <input class="login__email" type="email" name="email" placeholder="e-mail" required>
        <input class="login__password" type="password" name="password" placeholder="password" required>
        <button class="btn">Login</button>
    </form>
</section>`)

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

    return container
}


// TODO
    // loginForm.onsubmit = function(event) {
    //     var fail;
    //     var errorBoxContainer = document.querySelector('.error-message');
    //     var errorBoxMessage = document.querySelector('.error-message__inner');
    //     var email = document.querySelector('.login__email').value;
    //     var password = document.querySelector('.login__password').value;

    //     event.preventDefault();

    //     try {
    //         onLogin(email, password);
    //     } catch (error) {
    //         fail = error;
    //     }

    //     if (fail) {
    //         errorBoxContainer.classList.remove('hidden');
    //         errorBoxMessage.innerHTML = fail;
    //     }

    // }
