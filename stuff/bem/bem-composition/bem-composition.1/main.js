var cards = document.querySelector('.board').querySelectorAll('div')

var player = 0 // 1

var scores = [0, 0]

var clickedCards = []

cards[0].onclick = function () {
    cards[0].classList.toggle('board__card--flip')

    var imgs = cards[0].querySelectorAll('img')

    clickedCards.push(imgs[0].src)

    updateStatus()
}

cards[1].onclick = function () {
    cards[1].classList.toggle('board__card--flip')

    var imgs = cards[1].querySelectorAll('img')

    clickedCards.push(imgs[0].src)

    updateStatus()
}

cards[2].onclick = function () {
    cards[2].classList.toggle('board__card--flip')

    var imgs = cards[2].querySelectorAll('img')

    clickedCards.push(imgs[0].src)

    updateStatus()
}

cards[3].onclick = function () {
    cards[3].classList.toggle('board__card--flip')

    var imgs = cards[3].querySelectorAll('img')

    clickedCards.push(imgs[0].src)

    updateStatus()
}

function updateStatus() {
    if (clickedCards.length === 2) {
        if (clickedCards[0] === clickedCards[1]) {
            ++scores[player]
        }

        if (player === 0) {
            player = 1
        } else {
            player = 0
        }

        clickedCards.length = 0
    }
}