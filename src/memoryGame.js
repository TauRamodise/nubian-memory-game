
// Select the html card and animate it with JavaScript
const memoryCard = document.querySelectorAll('.memoryCard');

// variable to check if the card has flipped 
let cardHasFlipped = false;

// variable to lock the board once it has been shuffled 
let setBoard = false;
let backCard, frontCard;


// function reveals the back side of the card
function showCard() {
    if (setBoard) return;
    if (backCard === this) return;

    this.classList.toggle('show');

// first click, if the card was clicked it will not flip back
    if (!cardHasFlipped) {
        cardHasFlipped = true;
        backCard = this;

        return;
    }
//  second click, if the card was clicked it will not flip back
    frontCard = this;

    // once cards are clicked this function is invoked 
    cardsMatch();
}

// function cards match checks if the cards have the same data set name
function cardsMatch() {

    if (backCard.dataset.name === frontCard.dataset.name) {

        // if cards match disable the flip 
        disableShowCard();
    } else {

        // if the cards do not match cards flip back
        flipCardBack();
    }
}

// function removes the card being clicked while it is turned over
function removeClick() {
    backCard.classList.remove('show');
    frontCard.classList.remove('show');
}

// cards can no longer be clicked once it matches
function disableShowCard() {
    backCard.removeEventListener('click', showCard);
    frontCard.removeEventListener('click', showCard);
    resetGameBoard();
}

// function flips cards back when they don't match
function flipCardBack() {
    setBoard = true;
    setTimeout(() => {
        removeClick();
        resetGameBoard();
    }, 1000);

}

// stop the game when all cards have been flipped and cards matched 
function resetGameBoard() {
    cardHasFlipped = false;
    setBoard = false;
    backCard = null;
    frontCard = null;
    reloadGame();
}

// immediately invoke the shuffle function a the start of each game
(function shuffleCards() {

    memoryCard.forEach(card => {
        let shuffle = Math.floor(Math.random() * 19);
        card.style.order = shuffle;
    });
})();



memoryCard.forEach(cards => cards.addEventListener('click', showCard));