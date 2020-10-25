// Mounting the component corresponding to the title.
function mountTitle(onAccess) {  

    var container = mountContainer('<h1 class="title">Hello World App</h1>');

    container.onclick = onAccess; // On click, call to the function that changes a specific behavour 

    return container;
}