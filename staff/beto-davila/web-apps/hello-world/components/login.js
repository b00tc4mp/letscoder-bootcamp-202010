// Mounting the login function that calls the authenticateUser after submitting the form
function mountLogin(onLogin) {

    var container = mountContainer(`<section class="login">
    <h2>Login</h2>
    <img class="login__img" src="./style/img/login.jpeg" alt="login-img">
        <form class="login__form" action="">
            <input type="email" name="email" placeholder="e-mail" required>
            <input type="password" name="password" placeholder="password" required>
            <button class="login__btn btn">Login</button>
        </form>
</section>`);

    var form = container.querySelector('.login__form');

    form.onsubmit = function(event) {
        event.preventDefault();
        var inputs = form.querySelectorAll('input');

        var email = inputs[0].value;
        var password = inputs[1].value;

        try {
            onLogin(email, password); // call authenticateUser
        } catch (error) {
            alert(error.message);  // response if something went wrong
        }
    }
    return container;
}