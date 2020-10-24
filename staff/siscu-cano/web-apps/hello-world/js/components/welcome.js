function mountWelcome(username) {
    var container = mountContainer(`<section class="web-app">
        <h2 class="sub-title">Welcome to Hello World App ${username}!</h2>
    </section>`);

    return container;
}
