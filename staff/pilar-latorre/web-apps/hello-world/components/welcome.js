function mountWelcome(username = 'Usuario'){
    var container = mountContainer(`<section class="welcomePage off">
    <h2 class="welcome">Welcome ${username} :)!</h2>
</section>`)

    return container

}