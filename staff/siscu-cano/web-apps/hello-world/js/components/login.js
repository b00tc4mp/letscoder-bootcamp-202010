function mountLogin(selector, onLogin) {
    var login = document.querySelector(selector);
    var loginForm = login.querySelector('.user-login__form');

    loginForm.onsubmit = function(event) {
        var fail;
        var errorBoxContainer = document.querySelector('.error-message');
        var errorBoxMessage = document.querySelector('.error-message__inner');
        var email = document.querySelector('.user-login__email').value;
        var password = document.querySelector('.user-login__password').value;

        event.preventDefault();

        try {
            onLogin(email, password);
        } catch (error) {
            fail = error;
        }

        if (fail) {
            errorBoxContainer.classList.remove('hidden');
            errorBoxMessage.innerHTML = fail;
        }

    }
}