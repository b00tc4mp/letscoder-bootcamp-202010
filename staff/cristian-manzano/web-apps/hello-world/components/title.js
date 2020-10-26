function mountTitle(onHome) {
    var container = mountContainer('<h1 class = "title">Hello World App</h1>')


    container.onclick = onHome

    return container
}