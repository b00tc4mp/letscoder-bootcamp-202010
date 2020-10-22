// Mounting the login function that calls the authenticateUser after submitting the form
function mountLogin(selector, onLogin) {
    var login = document.querySelector(selector);
    var form = login.querySelector('.login__form');

    form.onsubmit = function(event) {
        event.preventDefault();
        var inputs = form.querySelectorAll('input');

        var email = inputs[0].value;
        var password = inputs[1].value;

        try {
            onLogin(email, password);
        } catch (error) {
            alert(error.message);
        }
    }
}