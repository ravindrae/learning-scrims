let messageElement = document.getElementById("message-el")
let sumElement = document.getElementById("sum-el")
let cardsElement = document.getElementById("cards-el")
let playerElement = document.getElementById("player-el")

let player = {
    name: "Ravindra",
    won: 0,
}

let cards = []
let sum = 0
let isAlive = true
let hasBlackjack = false


displayPlayer()

function displayPlayer() {
    playerElement.textContent = player.name + ": ₹" + player.won + "/-"
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackjack = false
    cards = [randomCard(), randomCard()]
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    cardsElement.textContent = "Cards: "
    for(let i= 0;i < cards.length;i++) {
        cardsElement.textContent += cards[i] + " "
    }

    sumElement.textContent = "Sum: " + sum

    if (sum <= 20) {
        messageElement.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageElement.textContent = "Blackjack! You win!"
        hasBlackjack = true
        isAlive = false
        player.won += 10
        displayPlayer()
    } else {
        messageElement.textContent = "You lose!"
        isAlive = false
        player.won -= 5
        displayPlayer()
    }
}

function newCard() {
    if(hasBlackjack === true || isAlive === false) {
        return
    }
    let newCard = randomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}