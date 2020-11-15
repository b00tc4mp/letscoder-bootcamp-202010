let currentPlayer = 'X';
let counter = 0;
let board = [];
let boarDimension = 8;

// We select the tic tac toe wrapper
let tictactoe = document.querySelector('.tic-tac-toe');

// Initialize the board of X positions with empty string
function initBoard() {
    for (let i = 0; i <= boarDimension; i++) {
        board[i] = '';
    }
}

function checkGameStatus(currentPlayer) {
    if ((board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
        (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
        (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
        (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
        (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
        (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
        (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
        (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)) {
        alert('Hay ganador el jugador:' + currentPlayer);
    }
}

// Check that there are no empty strings (end game)
function arrayHasEmptyValues(array) {
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === '') return false;
    }
    return true;
}

initBoard();

tictactoe.addEventListener('click', function(e) {

    if (e.target.classList.contains('content0')) {
        if (board[0] === '') {
            board[0] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content1')) {
        if (board[1] === '') {
            board[1] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content2')) {
        if (board[2] === '') {
            board[2] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content3')) {
        if (board[3] === '') {
            board[3] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content4')) {
        if (board[4] === '') {
            board[4] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content5')) {
        if (board[5] === '') {
            board[5] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content6')) {
        if (board[6] === '') {
            board[6] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content7')) {
        if (board[7] === '') {
            board[7] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }
    if (e.target.classList.contains('content8')) {
        if (board[8] === '') {
            board[8] = currentPlayer;
            e.target.innerHTML = "<span class='player" + currentPlayer + "'>" + currentPlayer + "</span>";
        }
    }

    checkGameStatus(currentPlayer);

    // We switch between X and O with every click
    currentPlayer = (currentPlayer == "X") ? "O" : "X";


    if (arrayHasEmptyValues(board)) alert("Termino la partida sin ganadores");


})