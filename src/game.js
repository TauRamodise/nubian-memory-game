const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, ];

const [frontCard0, backCard0,
    frontCard1, backCard1,
    frontCard2, backCard2,
    frontCard3, backCard3,
    frontCard4, backCard4,
    frontCard5, backCard5
] = cards



    const match = []

    for (let cardIdx = 0; cardIdx < cards.length; cardIdx++) {
        //for (let sideIdx = 0; sideIdx < sideIdx.length; sideIdx++) {
          //  let arr = {
            //    card: cards[cardIdx],
              //  side: sides[sideIdx]
            //};
            match.push(cards[cardIdx]);
        }
        // return match;
    //}


console.log(frontCard0, backCard0, frontCard1, backCard1);


let frontCard;
let backCard;

const matchCards = () => {
    match.forEach(card => {
      if(frontCard === backCard){
          return true;
          //lockCards()
      } else {
          return false
          //resetBoard
      }
    });
}

console.log(matchCards());

const lockCards = () => {}

const resetCards = () => {}


