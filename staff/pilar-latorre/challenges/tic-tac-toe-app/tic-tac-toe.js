

//  VARIABLE & FUNCTION CREATED TO CHECK WHO´S WINNING AND SHOW THIS INFO ON THE SITE

var winner = document.querySelector('.display')


function checkStatus()  {
    if (state[0] === 'x' && state[1] === 'x' && state[2] === 'x' //rows
    || state[3] === 'x' && state[4] === 'x' && state[5] === 'x' 
    || state[6] === 'x' && state[7] === 'x' && state[8] === 'x'
    || state[0] === 'x' && state[4] === 'x' && state[8] === 'x' //diagonals
    || state[2] === 'x' && state[4] === 'x' && state[6] === 'x'
    || state[0] === 'x' && state[3] === 'x' && state[6] === 'x' //columns
    || state[1] === 'x' && state[4] === 'x' && state[7] === 'x'
    || state[2] === 'x' && state[5] === 'x' && state[8] === 'x'){
        winner.innerText = 'GANA X'}
    else if (state[0] === 'o' && state[1] === 'o' && state[2] === 'o' //rows
    || state[3] === 'o' && state[4] === 'o' && state[5] === 'o' 
    || state[6] === 'o' && state[7] === 'o' && state[8] === 'o'
    || state[0] === 'o' && state[4] === 'o' && state[8] === 'o' //diagonals
    || state[2] === 'o' && state[4] === 'o' && state[6] === 'o'
    || state[0] === 'o' && state[3] === 'o' && state[6] === 'o' //columns
    || state[1] === 'o' && state[4] === 'o' && state[7] === 'o'
    || state[2] === 'o' && state[5] === 'o' && state[8] === 'o'){
        winner.innerText = 'GANA 0'}  
    else{
        draw()}

}

// DRAW

function draw() {
    var count = 0

    for (var i = 0; i < state.length; i++) {
        if (state[i] !== undefined) {
            count++
        }
    }

    if (count > 7) {
        winner.innerHTML = "EMPATE!";
    }
}

// START BUTTON

/*var startButton = document.querySelector(".start")
var startt = undefined
    
startButton.onclick = function (){
    state = startt
    buttons.innerText = startt
}*/

/*var startButton = document.querySelector(".start")
    
startButton.onclick = function (){
    document.getElementById("pilar").reset();
}
*/


/*var startButton = document.querySelector(".start")
    
startButton.onclick = function (){

    var startGame = document.getElementsByTagName('button');

    for(var i = 0; i < startGame.length -1; i++){
        startGame[i].innerHTML = ''
    }
}
*/

/*var startButton = document.querySelector(".start")
    
startButton.onclick = function (){

    var startGame = state.splice(0, state.length)

}
*/