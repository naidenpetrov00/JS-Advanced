const suitChars = {
    Spades: '\u2660',
    Hearts: '\u2663',
    Diamonds: '\u2666',
    CLubs: '\u2665',
};

class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }

    toString() {
        let suitChar = '';

        switch (this.suit) {
            case 'S':
                suitChar = suitChars.Spades;
                break;
            case 'H':
                suitChar = suitChars.Hearts;
            case 'D':
                suitChar = suitChars.Diamonds;
            case 'C':
                suitChar = suitChars.CLubs;
            default:
                break;
        }

        console.log(`${this.face}${suitChar}`);
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

    const card = new Card(face, suit);
    card.toString();
}

try {
    playingCards('A', 'S');
    playingCards('10', 'H');
    playingCards('1', 'C');
} catch (e) {
    console.log(e.message);
}