// Fills the board with x and o;
var board = [] 
var xWins = "X Wins!"
var oWins = "O Wins!"
var draw = "It's a Draw!"

/** 
 * Play to Tic Tac Toe
 * 
 * @param {string} symbol ||The symbol that is playing right now
 * @param {number} row    ||The  ROW   connected to the symbol that is playing right now.
 * @param {number} column ||The COLUMN connected to the symbol that is playing right now.
 * 
*/

//This function sets the symbol to the right place on the board game.
function play(symbol, row, column) {
  board [row * 3 + column] = symbol
}

//COUNT
var count = 0;
function getIfDraw () {
for (var i = 0; i < board.length; i++) { 
if (buttons[i].onclick) 
count ++;
}
}

//return the row, column, or diagonal that wins (F1,F2,F3,C1,C2,C3,D1,D2)
function whoWin() 
{
  //F1 |  F2 |  F3 (X)
  if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x'|| 
  board[3] === 'x' && board[4] === 'x' && board[5] === 'x'||
  board[6] === 'x' && board[7] === 'x' && board[8] === 'x')
  winMessage.innerText = xWins;
  
  //C1 | C2 | C3(X)
  else if (board[0] === 'x' && board[3] === 'x' && board[6] === 'x'||
  board[1] === 'x' && board[4] === 'x' && board[7] === 'x'||
  board[2] === 'x' && board[5] === 'x' && board[8] === 'x')
  winMessage.innerText = xWins;
  
  //D1 | D2(X)
  else if (board[0] === 'x' && board[4] === 'x' && board [8] === 'x'||
  board[2] === 'x' && board[4] === 'x' && board[6] === 'x')
  winMessage.innerText = xWins;

  //F1 | F2 | F3 (O)
  else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o'||
  board[3] === 'o' && board[4] === 'o' && board[5] === 'o'||
  board[6] === 'o' && board[7] === 'o' && board[8] === 'o')
  winMessage.innerText = oWins;
  
  //C1 | C2 | C3 (O)
  else if (board[0] === 'o' && board[3] === 'o' && board[6] === 'o'||
  board[1] === 'o' && board[4] === 'o' && board[7] === 'o'||
  board[2] === 'o' && board[5] === 'o' && board[8] === 'o')
  winMessage.innerText = oWins;
  
  //D1 | D2 (O)
  else if (board[0] === 'o' && board[4] === 'o' && board[8] === 'o'||
  board[2] === 'o' && board[4] === 'o' && board[6] === 'o')
  winMessage.innerText = oWins;

  //DRAW (X O)
  else if (count > 46) 
  winMessage.innerText = draw;
}


 
