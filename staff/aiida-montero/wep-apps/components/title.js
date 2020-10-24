function mountTitle(onHome) {
   var temp = document.createElement('div')

   temp.innerHTML = `<h1 class="title">Hello World App</h1>`

   var container = temp.firstChild

   container.onclick = onHome

 return container
}