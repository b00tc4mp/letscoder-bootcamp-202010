function mountRegister(selector, onRegister) {
    var register = document.querySelector(selector);
    var registerForm = register.querySelector('.user-register__form');

    registerForm.onsubmit = function(event) {
        var fail;
        var errorBoxContainer = document.querySelector('.error-message');
        var errorBoxMessage = document.querySelector('.error-message__inner');
        var fullname = document.querySelector('.user-register__fullname').value;
        var email = document.querySelector('.user-register__email').value;
        var password = document.querySelector('.user-register__password').value;
        var repassword = document.querySelector('.user-register__repassword').value;

        event.preventDefault();

        try {
            onRegister(fullname, email, password, repassword);
        } catch (error) {
            fail = error;
        }

        if (fail) {
            errorBoxContainer.classList.remove('hidden');
            errorBoxMessage.innerHTML = fail;
        }
    }
}