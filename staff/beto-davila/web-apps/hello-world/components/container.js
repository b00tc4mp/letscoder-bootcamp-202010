function mountContainer(template) {

    var node = document.createElement("div");
    var container = node.firstChild;
    node.innerHTML = template;

    return container;

}