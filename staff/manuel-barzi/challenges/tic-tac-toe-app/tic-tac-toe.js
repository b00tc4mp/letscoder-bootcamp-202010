/*
    | x | o
-------------
  o | x |
-------------
    | x | o

*/
var state = [];

/**
 * Play to Tic Tac Toe
 *
 * @param {string} symbol The symbol that is playing ('x' or 'o')
 * @param {number} row The row corresponding the symbol plays
 * @param {number} column The column corresponding the symbol plays
 */
function play(symbol, row, column) {
    state[row * 3 + column] = symbol
}

function getStatus() {
    // TODO check if any symbol already wins. in case yes, then return 'x' or 'o'. in case not, return null if game continues, or return false game draw.
}

function getWiningPosition() {
    // TODO return the row, or column, or diagonal that wins ('c0', 'c1', 'c2', 'r0', 'r1', 'r2', 'd1', d2')
}