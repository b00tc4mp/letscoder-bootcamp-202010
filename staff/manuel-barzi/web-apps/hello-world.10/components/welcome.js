function mountWelcome() {
    var temp = document.createElement('div')

    temp.innerHTML = `<section class="welcome">
    <h2>Welcome to Hello World App!</h2>
</section>`

    var container = temp.firstChild

    return container
}