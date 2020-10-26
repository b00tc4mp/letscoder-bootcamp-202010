function Welcome() {
    Component.call(this, `<section class="welcome">
    <h2>Welcome to Hello World App!</h2>
</section>`)
}

Welcome.prototype = Object.create(Component.prototype)
Welcome.prototype.constructor = Welcome