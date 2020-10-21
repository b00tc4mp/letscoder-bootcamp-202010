function mountRegisterConfirm(selector, onConfirm) {
    var confirm = document.querySelector(selector);
    var loginBtn = confirm.querySelector('.user-confirmation__login');

    loginBtn.onclick = onConfirm;
}