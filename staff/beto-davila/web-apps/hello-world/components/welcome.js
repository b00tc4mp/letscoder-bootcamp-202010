function mountWelcome (onDelete, onUpdate) {
    var container = mountContainer(`<section class="welcome">
    <h4></h4>
    <button class="welcome__unregister btn">Unregister</button>
    <button class="welcome__update btn">Update</button>
    </section>`);

    //var update = container.querySelector('.welcome__update');
    var unregister = container.querySelector('.welcome__unregister');
    var update = container.querySelector('.welcome__update');

    unregister.onclick = onDelete;
    update.onclick = onUpdate;

    return container;
}