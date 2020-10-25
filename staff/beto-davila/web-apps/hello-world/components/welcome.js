function mountWelcome (onUpdate, onUnregister) {
    var container = mountContainer(`<section class="welcome">
    <h4></h4>
    <button class="welcome__update btn">Update</button>
    <button class="welcome__unregister btn">Unregister</button>
    </section>`);

    var update = container.querySelector('.welcome__update');
    var unregister = container.querySelector('.welcome__unregister');

    unregister.onclick = onUnregister;
    update.onclick = onUpdate;

    return container;
}