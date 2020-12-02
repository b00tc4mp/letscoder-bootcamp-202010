function mountWelcome(username = 'Usuario') {
    var container = mountContainer(`<section class="welcome">
    <h2>BIENVENID@  ${username}!</h2>
</section>`)
    return container
}