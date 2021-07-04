let player = {
    name: "Joe",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageElement = document.getElementById("message-el")
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")
let playerElement = document.getElementById("player-el")

playerElement.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let card = Math.floor(Math.random() * 13 + 1)
    if (card === 1) {
        return 11
    } else if (card > 10) {
        return 10
    }
    return card
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsElement.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }

    sumElement.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }
    messageElement.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}

