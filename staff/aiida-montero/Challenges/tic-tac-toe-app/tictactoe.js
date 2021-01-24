
var board = [];
var buttons = document.querySelectorAll('button');
var xWins = "X Wins > 🥳"
var oWins = "O Wins 🥳"
var draw = "Empate 😐"
/**
 * Play to Tic Tac Toe
 *
 * @param {string} symbol The symbol that is playing ('x' or 'o')
 * @param {number} row The row corresponding the symbol plays
 * @param {number} column The column corresponding the symbol plays
 */
function play(symbol, row, column) {
    board[row * 3 + column] = symbol
}

function ifDraw() {
    var count = 0;
    for (var i = 0; i < board.length; i++) { 
      if (board[i] !== undefined)
        count++;
 }
  
    return count
  }
function getStatus() {
    // TODO check if any symbol already wins. in case yes, then return 'x' or 'o'. in case not, return null if game continues, or return false game draw.
}

function getWiningPosition() {
    // TODO return the row, or column, or diagonal that wins ('c0', 'c1', 'c2', 'r0', 'r1', 'r2', 'd1', d2')
}

function getIfWins () {
    
// row 1 row2 row3 
if (board[0] === "x" && board [1] === "x" && board[2] === "x" ||
    board[3]=== "x" && board [4] === "x" && board[5] === "x"  ||
    board[6] === "x" && board [7] === "x" && board[8] === "x" )
    result.innerText = "X Wins";
// column 1 column 2 column 3
if (board[0] === "x" && board [3] === "x" && board [6] === "x" ||
    board [1] ==="x" && board [4] === "x" && board [7] === "x" ||
    board [2] ==="x" && board [5] === "x" && board [8] === "x" )
    result.innerText = "X Wins";

// Diagonal 1 Diagonal 2
if (board[0] === "x" && board [4] === "x" && board [8] === "x" ||
    board [2] ==="x" && board [4] === "x" && board [6] === "x" )
    result.innerText = "X Wins";
    


// row 1 row2 row3 
if (board[0] === "o" && board [1] === "o" && board[2] === "o" ||
    board[3] === "o" && board [4] === "o" && board[5] === "o"  ||
    board[6] === "o" && board [7] === "o" && board[8] === "o" )
    result.innerText = "O Wins";

// column 1 column 2 column 3
if (board[0] === "o" && board [3] === "o" && board [6] === "o" ||
    board [1] ==="o" && board [4] === "o" && board [7] === "o" ||
    board [2] ==="o" && board [5] === "o" && board [8] === "o" )
    result.innerText = "O Wins";

// Diagonal 1 Diagonal 2
if (board[0] === "o" && board [4] === "o" && board [8] === "o" ||
    board [2] ==="o" && board [4] === "o" && board [6] === "o" )
    result.innerText = "O Wins"; 

else if (ifDraw() > 7)
    result.innerText = draw;
        
    }



