
// Mounting the 'Access' component that sends, whether to the login or register section on clicking its repective buttons.
function mountAccess(onRegister, onLogin) {

    var container = mountContainer(`<section class="access">
    <button class="access__register btn">Register</button> or <button class="access__login btn">Login</button>
    </section>`);

    var register = container.querySelector('.access__register');
    var login = container.querySelector('.access__login');

    register.onclick = onRegister; // call onRegister on clicking
    login.onclick = onLogin; // call onLogin on clicking

    return container;
}