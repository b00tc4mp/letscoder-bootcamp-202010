function mountTitle(onHome) {
    var container = mountContainer('<h1 class="title">AIIDA MONTERO APP</h1>')

    container.onclick = onHome

    return container
}