var cards = document.querySelector('.board').querySelectorAll('div')

var player = 0 // 1

var scores = [0, 0]

var clickedCards = []

cards[0].onclick = function () {
    var imgs = cards[0].querySelectorAll('img')

    imgs[0].classList.toggle('hide')
    imgs[1].classList.toggle('hide')

    clickedCards.push(imgs[0].src)

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

cards[1].onclick = function () {
    var imgs = cards[1].querySelectorAll('img')

    imgs[0].classList.toggle('hide')
    imgs[1].classList.toggle('hide')

    clickedCards.push(imgs[0].src)

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

cards[2].onclick = function () {
    var imgs = cards[2].querySelectorAll('img')

    imgs[0].classList.toggle('hide')
    imgs[1].classList.toggle('hide')

    clickedCards.push(imgs[0].src)

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

cards[3].onclick = function () {
    var imgs = cards[3].querySelectorAll('img')

    imgs[0].classList.toggle('hide')
    imgs[1].classList.toggle('hide')

    clickedCards.push(imgs[0].src)

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