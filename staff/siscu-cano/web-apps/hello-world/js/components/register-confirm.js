function mountRegisterConfirm(onLogin) {
    var container = mountContainer(`<section class="register-confirm">
    User <em>registered successfully</em>, proceed to: <button
        class="register-confirm__login btn">Login</button>.
</section>`);

    var login = container.querySelector('.register-confirm__login');
    login.onclick = onLogin;

    return container;
}