/* Query Selectors */

const whoIsPlaying = document.querySelector(".turn");
const displayScore = document.querySelector(".score");
const resetButton = document.querySelector("#reset-button");
const cells = document.querySelectorAll(".cells");


/* Game variables */

let symbol = "✖";
let board = [];
let initialTurn = "Turno de ✖";
//let gameActive = true;




/**
 *----- MAIN ------- *
 **/
cells[0].onclick = function () {

    cells[0].innerText = symbol;

    positionOnTheBoard(symbol, 0, 0);

    handleCheckStatus();

    handleChangeTurn();

}

cells[1].onclick = function () {

    cells[1].innerText = symbol;

    positionOnTheBoard(symbol, 0, 1);

    handleCheckStatus();

    handleChangeTurn();

}

cells[2].onclick = function () {

    cells[2].innerText = symbol;

    positionOnTheBoard(symbol, 0, 2);

    handleCheckStatus();

    handleChangeTurn();

}

cells[3].onclick = function () {

    cells[3].innerText = symbol;

    positionOnTheBoard(symbol, 1, 0);

    handleCheckStatus();

    handleChangeTurn();

}

cells[4].onclick = function () {

    cells[4].innerText = symbol;

    positionOnTheBoard(symbol, 1, 1);

    handleCheckStatus();

    handleChangeTurn();

}

cells[5].onclick = function () {

    cells[5].innerText = symbol;

    positionOnTheBoard(symbol, 1, 2);

    handleCheckStatus();

    handleChangeTurn();

}

cells[6].onclick = function () {

    cells[6].innerText = symbol;

    positionOnTheBoard(symbol, 2, 0);

    handleCheckStatus();

    handleChangeTurn();

}

cells[7].onclick = function () {

    cells[7].innerText = symbol;

    positionOnTheBoard(symbol, 2, 1);

    handleCheckStatus();

    handleChangeTurn();

}

cells[8].onclick = function () {

    cells[8].innerText = symbol;

    positionOnTheBoard(symbol, 2, 2);

    handleCheckStatus();

    handleChangeTurn();

}




// Handle events


function positionOnTheBoard(symbol, row, column) {
    board[row * 3 + column] = symbol;

}



function handleChangeTurn() {

    if (symbol === "✖") {

        symbol = "◯";

        whoIsPlaying.innerHTML = "Turno de ◯";

    } else {

        symbol = "✖";

        whoIsPlaying.innerHTML = "Turno de ✖";
    }

}

function handleCheckStatus() {

    if (board[0] === '✖' && board[1] === '✖' && board[2] === '✖' || board[3] === '✖' && board[4] === '✖' && board[5] === '✖' || board[6] === '✖' && board[7] === '✖' && board[8] === '✖') {
        displayScore.innerHTML = "Gana ✖!";

        return;
    }
    else if (board[0] === '◯' && board[1] === '◯' && board[2] === '◯' || board[3] === '◯' && board[4] === '◯' && board[5] === '◯' || board[6] === '◯' && board[7] === '◯' && board[8] === '◯') {
        displayScore.innerHTML = "Gana ◯!";

        return;
    }
    else if (board[0] === '✖' && board[3] === '✖' && board[6] === '✖' || board[1] === '✖' && board[4] === '✖' && board[7] === '✖' || board[2] === '✖' && board[5] === '✖' && board[8] === '✖') {
        displayScore.innerHTML = "Gana ✖!";

        return;
    }
    else if (board[0] === '◯' && board[3] === '◯' && board[6] === '◯' || board[1] === '◯' && board[4] === '◯' && board[7] === '◯' || board[2] === '◯' && board[5] === '◯' && board[8] === '◯') {
        displayScore.innerHTML = "Gana ◯!";

        return;
    }
    else if (board[0] === '✖' && board[4] === '✖' && board[8] === '✖' || board[2] === '✖' && board[4] === '✖' && board[6] === '✖') {
        displayScore.innerHTML = "Gana ✖!";

        return;
    }
    else if (board[0] === '◯' && board[4] === '◯' && board[8] === '◯' || board[2] === '◯' && board[4] === '◯' && board[6] === '◯') {
        displayScore.innerHTML = "Gana ◯!";

        return;
    } else {

        handleTieGame ();
    }




}


function handleTieGame() {

    for (let i = 0; i < board.length; i++) {

        if (!board.includes(undefined)) {

            displayScore.innerHTML = "EMPATE!";
            return;
        }

    }
}

resetButton.onclick = function () {


    symbol = "✖";

    whoIsPlaying.innerHTML = initialTurn;

    board = [];

    for (let i = 0; i < cells.length; i++) {

        cells[i].innerHTML = "";
        displayScore.innerHTML = "";

    }

    return;
}