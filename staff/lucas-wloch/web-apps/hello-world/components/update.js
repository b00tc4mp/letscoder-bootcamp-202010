function mountUpdate(onUpdate){
    var container = mountContainer(`<section class="update">
    <h3 class="update__h3"></h3>
    <form class="update__form">
        <input type="text" placeholder="Characteristic" required><input type="text" placeholder="value" required>
        <button class="update__send">Send</button>
    </form>
</section>`);

    var form = container.querySelector('.update__form');

    form.onsubmit = function(event){
        event.preventDefault();

        var inputs = form.querySelectorAll('input')
        var characteristic = inputs[0].value;
        var value = inputs[1].value;
        
        try{
            onUpdate(characteristic,value);

        } catch (error) {
            var reTry = container.querySelector('.update__h3');
            reTry.innerText = error;
        };
    };
    return container;
}