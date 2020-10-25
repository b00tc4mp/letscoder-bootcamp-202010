function mountConfirmDelete (onDelete) {

    var container = mountContainer(`<section class="delete">
    <h5>Confirm for unregistering:</h5>
    <form class="delete__form" action="">
            <input type="email" name="email" placeholder="e-mail" required>
            <input type="password" name="password" placeholder="password" required>
            <button class="delete__btn btn">Confirm</button>
    </form>
    </section>`);

    var form = container.querySelector('.delete__form');

    form.onsubmit = function(event) {
        event.preventDefault();
        var inputs = form.querySelectorAll('input');

        var email = inputs[0].value;
        var password = inputs[1].value;

        try {
            onDelete(email, password);
        } catch (error) {
            alert(error.message); 
        }
    }

    return container;
}