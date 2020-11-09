document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'ojo',
			img: 'images/ojo.jpg'
		},
		{
			name: 'Thor',
			img: 'images/Thor.jpg'
		},
		{
			name: 'viudanegra',
			img: 'images/viudanegra.jpg'
		},
		{
			name: 'spiderman',
			img: 'images/spiderman.jpg'
		},
		{
			name: 'hulk',
			img: 'images/hulk.jpg'
		},
		{
			name: 'ironman',
			img: 'images/ironman.jpeg'
		},
		{
			name: 'ojo',
			img: 'images/ojo.jpg'
		},
		{
			name: 'Thor',
			img: 'images/Thor.jpg'
		},
		{
			name: 'viudanegra',
			img: 'images/viudanegra.jpg'
		},
		{
			name: 'spiderman',
			img: 'images/spiderman.jpg'
		},
		{
			name: 'hulk',
			img: 'images/hulk.jpg'
		},
		{
			name: 'ironman',
			img: 'images/ironman.jpeg'
		}
	]	

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	var cardsChosen = [];
	var cardsChosenId = [];
	const cardsWon = [];
	var resultDisplay= document.querySelector("score")




	function createBoard(){
		for(let i = 0; i<cardArray.length; i++){
			var card = 	document.createElement('img')
			card.setAttribute('src', 'images/back.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('Hey! estas dandole click a la misma carta')
		}
		else if(cardsChosen[0]===cardsChosen[1]){
			alert('Encontraste un par, ¡genial!')
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('intenta de nuevo')
		}
		cardsChosen=[];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "Felicidades, encontraste todos los pares."
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
		
	}


	createBoard()


})