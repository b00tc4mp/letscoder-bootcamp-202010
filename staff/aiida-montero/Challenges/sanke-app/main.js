var speedX = 0
var speedY = 0
var positionX = 0
var positionY = 0
var array =[]
var snake = 5

ctx.fillRect (10,10,15,45)

window.onload = function () {
    document.addEventListener("keydown",onKeyDown)
    setInterval(gameMechanics,1000/15)
    const canvas = document.getElementById ("canvas")
    const ctx = canvas.getContext ("2d")
}

function onKeyDown (event) {

     if (event.keyDown === 37 ){
         speedX = -1
         speedY =  0 
    } else if (event.keyDown === 38 ){
        speedX =  0
        speedY = -1
    } else if (event.keyDown === 39 ){
        speedX =  1
        speedY =  0 
    } else if (event.keyDown === 40 ){
        speedX =  0
        speedY =  1
}
}

