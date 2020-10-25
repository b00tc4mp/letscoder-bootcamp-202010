// Mounting the register confirmation section that calls the Login section on clicking the button
function mountRegisterConfirm(onLogin) {

    var container = mountContainer(`<section class="register-confirm">
    <p>User registered successfully, proceed to <button class="register-confirm__login btn">Login</button></p>
</section>`);

    var login = container.querySelector('.register-confirm__login');

    login.onclick = onLogin;

    return container;
}