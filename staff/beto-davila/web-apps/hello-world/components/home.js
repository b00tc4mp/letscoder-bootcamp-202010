
// Mounting the 'Home' component that sends, whether to the login or register section on clicking its repective buttons.
function mountHome(selector, onRegister, onLogin) {
    var home = document.querySelector(selector);
    var register = home.querySelector('.home__register');
    var login = home.querySelector('.home__login');

    register.onclick = onRegister; // call onRegister on clicking
    login.onclick = onLogin; // call onLogin on clicking
}