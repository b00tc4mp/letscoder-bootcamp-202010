let board = new Array(16);
let imagesCard = new Array(8);
let picsumIdPhotos = [1025, 103, 1069, 1074, 1084, 219, 237, 292, 419, 429, 435, 447, 478, 493, 63, 631, 742, 820, 768, 798, 815, 82, 824, 828, 837, 845]
let cardsClicked = ['', ''];
let matchingPairsWrapper = document.querySelector('.matching-pairs');
let points = 0;
let cardSelector = new Array(16);
let pointsSelector = document.querySelector('.points');

// ---------------------------------------------------------------------------------------

function initGame() {

    let position = 0;
    let assignOk = false;

    // Random images generator
    let imagesIdSelected = randomArray(picsumIdPhotos).slice(0, 8);

    // DOM selection Wrapper game
    cardSelector[0] = document.querySelector('.matching-pairs-content0');
    cardSelector[1] = document.querySelector('.matching-pairs-content1');
    cardSelector[2] = document.querySelector('.matching-pairs-content2');
    cardSelector[3] = document.querySelector('.matching-pairs-content3');
    cardSelector[4] = document.querySelector('.matching-pairs-content4');
    cardSelector[5] = document.querySelector('.matching-pairs-content5');
    cardSelector[6] = document.querySelector('.matching-pairs-content6');
    cardSelector[7] = document.querySelector('.matching-pairs-content7');
    cardSelector[8] = document.querySelector('.matching-pairs-content8');
    cardSelector[9] = document.querySelector('.matching-pairs-content9');
    cardSelector[10] = document.querySelector('.matching-pairs-content10');
    cardSelector[11] = document.querySelector('.matching-pairs-content11');
    cardSelector[12] = document.querySelector('.matching-pairs-content12');
    cardSelector[13] = document.querySelector('.matching-pairs-content13');
    cardSelector[14] = document.querySelector('.matching-pairs-content14');
    cardSelector[15] = document.querySelector('.matching-pairs-content15');

    // Init Board Array(16)
    for (let i = 0; i < board.length; i++) {
        board[i] = '';
    }

    // Init images from picsum photos website
    for (let i = 0; i < imagesCard.length; i++) {
        imagesCard[i] = `https://picsum.photos/id/${imagesIdSelected[i]}/200/150`;
    }

}

// ---------------------------------------------------------------------------------------

function assignImagesToBoard() {

    for (let i = 0; i < imagesCard.length; i++) {
        assignOk = false;
        while (!assignOk) {
            position = Math.floor(Math.random() * 16);
            if (board[position] === '') {
                board[position] = imagesCard[i];
                assignOk = true;
            }
        }
    }
}

// ---------------------------------------------------------------------------------------

function randomArray(array) {
    let i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}

// ---------------------------------------------------------------------------------------

function insertImagesInBoard() {
    cardSelector[0].querySelector('img').src = board[0]
    cardSelector[1].querySelector('img').src = board[1]
    cardSelector[2].querySelector('img').src = board[2]
    cardSelector[3].querySelector('img').src = board[3]
    cardSelector[4].querySelector('img').src = board[4]
    cardSelector[5].querySelector('img').src = board[5]
    cardSelector[6].querySelector('img').src = board[6]
    cardSelector[7].querySelector('img').src = board[7]
    cardSelector[8].querySelector('img').src = board[8]
    cardSelector[9].querySelector('img').src = board[9]
    cardSelector[10].querySelector('img').src = board[10]
    cardSelector[11].querySelector('img').src = board[11]
    cardSelector[12].querySelector('img').src = board[12]
    cardSelector[13].querySelector('img').src = board[13]
    cardSelector[14].querySelector('img').src = board[14]
    cardSelector[15].querySelector('img').src = board[15]
}

// ---------------------------------------------------------------------------------------

var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

// ---------------------------------------------------------------------------------------

function checkGameStatus() {

    if (cardsClicked[1] !== '') {

        if (board[cardsClicked[0]] === board[cardsClicked[1]]) {
            points = ++points;
            pointsSelector.innerHTML = points;
            cardsClicked[0] = '';
            cardsClicked[1] = '';
        } else {
            delay(function() {
                cardSelector[cardsClicked[0]].classList.remove("visible");
                cardSelector[cardsClicked[1]].classList.remove("visible");
                cardsClicked[0] = '';
                cardsClicked[1] = '';
            }, 2000);

        }
    }
}

initGame();
assignImagesToBoard();
assignImagesToBoard();
insertImagesInBoard();

// ---------------------------------------------------------------------------------------

function onClickCard(evt, position) {

    if (cardsClicked[0] === '') {
        cardsClicked[0] = position
    } else if (cardsClicked[1] === '') {
        cardsClicked[1] = position
    }
    evt.target.classList.toggle("visible");
    checkGameStatus();
}

// ---------------------------------------------------------------------------------------

matchingPairsWrapper.addEventListener('click', function(e) {

    if (e.target.classList.contains('matching-pairs-content0') && cardsClicked[1] === '') {
        onClickCard(e, 0);
    }
    if (e.target.classList.contains('matching-pairs-content1') && cardsClicked[1] === '') {
        onClickCard(e, 1);
    }
    if (e.target.classList.contains('matching-pairs-content2') && cardsClicked[1] === '') {
        onClickCard(e, 2);
    }
    if (e.target.classList.contains('matching-pairs-content3') && cardsClicked[1] === '') {
        onClickCard(e, 3);
    }
    if (e.target.classList.contains('matching-pairs-content4') && cardsClicked[1] === '') {
        onClickCard(e, 4);
    }
    if (e.target.classList.contains('matching-pairs-content5') && cardsClicked[1] === '') {
        onClickCard(e, 5);
    }
    if (e.target.classList.contains('matching-pairs-content6') && cardsClicked[1] === '') {
        onClickCard(e, 6);
    }
    if (e.target.classList.contains('matching-pairs-content7') && cardsClicked[1] === '') {
        onClickCard(e, 7);
    }
    if (e.target.classList.contains('matching-pairs-content8') && cardsClicked[1] === '') {
        onClickCard(e, 8);
    }
    if (e.target.classList.contains('matching-pairs-content9') && cardsClicked[1] === '') {
        onClickCard(e, 9);
    }
    if (e.target.classList.contains('matching-pairs-content10') && cardsClicked[1] === '') {
        onClickCard(e, 10);
    }
    if (e.target.classList.contains('matching-pairs-content11') && cardsClicked[1] === '') {
        onClickCard(e, 11);
    }
    if (e.target.classList.contains('matching-pairs-content12') && cardsClicked[1] === '') {
        onClickCard(e, 12);
    }
    if (e.target.classList.contains('matching-pairs-content13') && cardsClicked[1] === '') {
        onClickCard(e, 13);
    }
    if (e.target.classList.contains('matching-pairs-content14') && cardsClicked[1] === '') {
        onClickCard(e, 14);
    }
    if (e.target.classList.contains('matching-pairs-content15') && cardsClicked[1] === '') {
        onClickCard(e, 15);
    }

});