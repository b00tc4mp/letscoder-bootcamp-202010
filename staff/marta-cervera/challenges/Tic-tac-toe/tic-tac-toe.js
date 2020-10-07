//poner parametros de la jugada y las coordenadas
/*

param {string} symbol. The symbol that is playing ("x" or "o")
param {number} row. The row which corresponds the symbol that is playin
param {number} colum. The colum which corresponds the symbol that is playing



*/

var state = []
 
function getWiningPosition () { //TO DO CHECK IF ANY SYMBOL WINS, IN CASE YES RETURN X IN CASE NOTE, RETURN NULL

    if (table[0] === "X" && table [1]=== "X" && table [2]=== "X" || table[3] === "X" && table [4]=== "X" && table [5]=== "X" || 
    table [6]=== "X" && table [7]=== "X" && table [8]=== "X");
 // X wins

    else if (table[0] === "O" && table [1]=== "O" && table [2]=== "O" || table[3] === "O" && table [4]=== "O" && table [5]=== "O" ||
    table [6]=== "O" && table [7]=== "O" && table [8]=== "O")// O wins

}

function Status(){

    var state =[]
    // TO DO return row or column that wins (r0, r1,r2, c0, c1, c2 , d1,d2)

}