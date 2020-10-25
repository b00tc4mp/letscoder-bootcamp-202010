function mountRegister(onRegister) {
    var container = mountContainer(`<section class="register">
    <h2 class="sub-title">Register</h2>

    <form class="register__form">
        <input class="register__fullname" type="text" name="fullname" placeholder="full name" _required>
        <input class="register__email" type="email" name="email" placeholder="e-mail" required>
        <input class="register__password" type="password" name="password" placeholder="password" required>
        <input class="register__repassword" type="password" name="repassword" placeholder="repeat password"
            required>
        <button class="btn">Register</button>
    </form>
</section>`);


    var form = container.querySelector('.register__form');

    form.onsubmit = function (event) {
        event.preventDefault();

        var inputs = form.querySelectorAll('input');

        var fullname = inputs[0].value;
        var email = inputs[1].value;
        var password = inputs[2].value;
        var repassword = inputs[3].value;

        try {
            onRegister(fullname, email, password, repassword);
        } catch (error) {
            alert(error.message);
        }
    }

    return container
}