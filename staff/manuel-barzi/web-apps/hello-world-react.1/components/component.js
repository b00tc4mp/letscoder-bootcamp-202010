function Component(template) {
    var temp = document.createElement('div')

    temp.innerHTML = template

    var container = temp.firstChild

    this.container = container
}

Component.prototype.replaceWith = function(component) {
    if (!(component instanceof Component)) throw new TypeError(component + ' is not a Component')

    this.container.replaceWith(component.container)
}