function Title(onHome) {
    Component.call(this, '<h1 class="title">Hello World App</h1>')

    this.container.onclick = onHome
}

Title.prototype = Object.create(Component.prototype)
Title.prototype.constructor = Title