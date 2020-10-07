var symbol = "❌";
var buttons = document.querySelectorAll(".game-cell");

//instead of repeating every time the function we use loops
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    buttons[i].innerText = symbol;
    if (symbol === "❌") {
      symbol = "⭕";
      var xNext = document.querySelector(".status");
      xNext.innerText = "⭕ is next";
    } else {
      symbol = "❌";
      var xNext = document.querySelector(".status");
      xNext.innerText = "❌ is next";
    }

    announceWinner();
  };
}

function announceWinner() {
  if (buttons[0] === "❌" && buttons[1] === "❌" && buttons[2] === "❌") {
    alert("Winner");
  }
}

/* buttons.onclick = function () {
  var empty = "";
  if (
    buttons[0] !== empty &&
    buttons[0] === buttons[1] &&
    buttons[1] === buttons[2]
  ) {
    alert("Winner!");
  }
}; */
/* 
    
  }; */

//var buttons = document.querySelectorAll(".game-cell");
// buttons.onclick = function () {
/*   var empty = "";
//   if (
//     buttons[0] !== empty &&
//     buttons[0] === buttons[1] &&
//     buttons[1] === buttons[2]
//   ) {
//     alert("Winner!");
//   }
// };
 */

// var winner = [
//   [0, 1, 2],
//   [0, 4, 8],
//   [0, 3, 6],
//   [3, 4, 5],
//   [6, 7, 8],
//   [6, 4, 2],
//   [1, 4, 7],
// ];

/* winner *
012
048
036
345
678
642
147
/

/* Sólo X cada vez que clickas 

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = function activateXorO() {
//     buttons[i].innerText = symbol;
//   };
// } */

// X o O cada vez que clickas

// Si buttons[i].innerText === winner - alert winner.

/* 
function checkStatus() {
  if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x' || board[3] === 'x' && board[4] === 'x' && board[5] === 'x' || board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
    console.log('x wins!')
  } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o' || board[3] === 'o' && board[4] === 'o' && board[5] === 'o' || board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
    console.log('o wins!')
  }

  // TODO check columns
  // TODO check diagonals
}

printStatus()

function printStatus() {
  var status = '' */
