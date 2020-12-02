function mountUpdateUser(callback) {

    var container = mountContainer(`<section class="update">
    <h5>Confirm the information you want to add to your profile:</h5>
    <form class="update__form" action="">
            <input type="text" name="field" placeholder="field">:
            <input type="text" name="value" placeholder="value">
            <button class="update__btn btn">Update</button>
    </form>
    </section>`);

    var form = container.querySelector('.update__form');

    form.onsubmit = function(event) {
        event.preventDefault();
        var inputs = form.querySelectorAll('input');

        var field = inputs[0].value;
        var value = inputs[1].value;

        try {
            callback(field, value);
        } catch (error) {
            alert(error.message); 
        }
    }

    return container;
}