class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }
}

function playingCards(face, suit) {
    const valid = {
        faces: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        suits: ['S', 'H', 'D', 'C'],
    };

    if (!valid.faces.includes(face)) {
        throw new Error('Invalid face');
    }
    if (!valid.suits.includes(suit)) {
        throw new Error('Invalid suit');
    }


}

try {
    playingCards('A', 'S');
    playingCards('10', 'H');
    playingCards('1', 'C');
} catch (e) {
    console.log(e.message);
}