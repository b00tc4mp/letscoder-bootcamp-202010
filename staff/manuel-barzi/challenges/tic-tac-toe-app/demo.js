var board = []

board[0] = 'x'
board[5] = 'o'

checkStatus()

board[2] = 'x'
board[3] = 'o'

checkStatus()

board[1] = 'x'

checkStatus()    

function checkStatus() {
    if (board[0] === 'x' && board[1] === 'x' && board[2] === 'x' || board[3] === 'x' && board[4] === 'x' && board[5] === 'x'|| board[6] === 'x' && board[7] === 'x' && board[8] === 'x') {
        console.log('x wins!')
    } else if (board[0] === 'o' && board[1] === 'o' && board[2] === 'o' || board[3] === 'o' && board[4] === 'o' && board[5] === 'o'|| board[6] === 'o' && board[7] === 'o' && board[8] === 'o') {
        console.log('o wins!')
    }

    // TODO check columns
    // TODO check diagonals
}

printStatus()

function printStatus() {
    var status = ''

    for (var f = 0; f < 3; f++) {
        //console.log('fila', f)

        for (var c = 0; c < 3; c++) {
            //console.log('columna', c)

            status = status + board[f * 3 + c] + '\t'

            //console.log(f * 3 + c)
        }

        status = status + '\n'
    }

    console.log(status)
}