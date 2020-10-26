function mountWelcome(onUnregister) {
    var container = mountContainer(`<section class="welcome off">
    <h2></h2>
    <h3>If you want to delete your account please go to delete button</h3>
    <button class="unregister">delete</button>
</section>`);

    var unregisterUser = container.querySelector('.unregister')
    unregisterUser.onclick = onUnregister;


    return container;
}