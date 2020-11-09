// Query Selectors
const display = document.querySelector('.score');
const cards = document.querySelectorAll('.container-image');


// Add EventListener 'click' to every card from cards list through loop method forEach
cards.forEach(card => card.addEventListener('click', flipCard));

// variables

let flippedCard = false;
let firstCard, secondCard;
let count = 0;


/* 'this' variable is the clicked card. The function adds the 'flip' class with the 'add' property
If there's no flipped card, is set to 'true'. */
function flipCard() {
    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;

        return;

    }

    secondCard = this;
    flippedCard = false;


    checkMatch();

    //countTurns();

}
// dataset attribute provide information about a HTML element with no structure change
function checkMatch() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        scoreMessage();
        preventClick();
        return;
    }
    display.innerHTML = 'Gran memoria de pez!'
    keepPlaying();
}

function countTurns() {
    for (i = 0; i < cards.length; i++) {
        count++

        if (count == 15) {
            flippedCard = false;
            firstCard = '';
            secondCard = '';
            display.innerHTML = 'Perdiste, amigo!'
        }
    }
}

// Avoid more clicks on the already clicked cards by removing the Event Listeners.
function preventClick() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function scoreMessage() {
    display.innerHTML = 'MATCH!';
}

/* After 1 second, the function flips the cards and removes the 'flip' class to release the 
clicked cards did not match and keep playing with them in next turns */
function keepPlaying() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}

