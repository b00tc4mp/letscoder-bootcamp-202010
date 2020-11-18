function mountRegisterConfirm(onClick) {
    var container = mountContainer(`<section class="confirm">
    User registered successfully, proceed to <button class="confirm__button">Login</button>.
</section>`);

    var button = container.querySelector('.confirm__button');

    button.onclick = onClick;

    return container;
}  
    