function mountAccess(onRegister, onLogin) {
    var container = mountContainer(`<section class="access">
    <img class="access_banana" src="images/banana.gif" alt="">
    <button class="access__register btn">Register</button> or <button
        class="access__login btn">Login</button>
</section>`);

    var register = container.querySelector('.access__register');
    var login = container.querySelector('.access__login');

    register.onclick = onRegister;
    login.onclick = onLogin;

    return container;
}