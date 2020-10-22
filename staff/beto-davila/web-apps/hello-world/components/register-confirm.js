// Mounting the register confirmation section that calls the Login section on clicking the button
function mountRegisterConfirm(selector, onLogin) {
    var confirm = document.querySelector(selector);

    var login = confirm.querySelector('.register-confirm__login');

    login.onclick = onLogin;
}