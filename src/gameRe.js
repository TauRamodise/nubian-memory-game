const fCards = [1, 2, 3, 4, 5, 6];
const bCards = [1, 2, 3, 4, 5, 6];

const [frontCard0, frontCard1, frontCard2, 
    frontCard3, frontCard4, frontCard5,] = fCards;

const [backCard0, backCard1, backCard2,
     backCard3, backCard4, backCard5,] = bCards;

 
const showCard = () => {
    if(!cardHasFlipped){
        cardHasFlipped = true;
        fCards = this;
    } else {
        cardHasFlipped = false;
        bCards = this
    }
}

const matchCards = () => {
    for(let f = 0; f < fCards.length; f++){
        for( let b = 0; b < bCards.length; b++ ){
            if(fCards[f] === bCards[b]){
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(matchCards());

