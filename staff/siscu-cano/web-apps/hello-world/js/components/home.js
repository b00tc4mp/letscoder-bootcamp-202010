function mountHome(selector, onRegister, onLogin) {

    var home = document.querySelector(selector);
    var registerBtn = home.querySelector('.user-action__register');
    var loginBtn = home.querySelector('.user-action__login');

    registerBtn.onclick = onRegister
    loginBtn.onclick = onLogin
}