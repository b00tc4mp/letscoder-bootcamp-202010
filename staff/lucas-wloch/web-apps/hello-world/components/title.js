function mountTitle(onClick){
    var container = mountContainer(`<h1 class="title">Hello World App</h1>`);
    
    container.onclick = onClick;

    return container;
}