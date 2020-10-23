// Mounting the component corresponding to the title.
function mountTitle(selector, onHome) {  
    var title = document.querySelector(selector);
    title.onclick = onHome; // On click, call to the function that changes a specific behavor 
}