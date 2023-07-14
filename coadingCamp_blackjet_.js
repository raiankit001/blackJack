let player={
    name:prompt("enter your name"),
    chips:150
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById('player-el');


playerEl.innerText = player.name +": $"+player.chips;
function getRandomCard() {
    //      if 1    -> 11
    //   if 11-13   -> 10
    let randomNo = Math.floor((Math.random()) * 13 + 1);
    if (randomNo === 1) {
        return 11;
    }
    else if (randomNo > 10) {
        return 10;
    }
    else return randomNo;
}

function startGame() {
    if(player.chips>0){
        player.chips-=10;
    // console.log(player.chips)
    playerEl.innerText = player.name +": $"+player.chips;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackJack=false;
    isAlive = true;
    renderGame();
    }
}

function renderGame() {
    cardEl.innerText = "Cards : ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerText += " " + cards[i];
    }
    sumEl.innerText = "Sum : " + sum;
    if (sum === 21) {
        hasBlackJack = true;
        message = "Hurray! you've got a Blackjack :)"
        player.chips+=50;
        playerEl.innerText = player.name +": $"+player.chips;
    }
    else if (sum > 21) {
        isAlive = false;
        message = "Ohh no! you are out of the game :(";
    }
    else {
        message = "Do you want to draw a new card?";
    }

    messageEl.textContent = message;
    console.log(sum);

    
}

function newCard() {
    if(hasBlackJack===false && isAlive===true){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
        
    }
}

