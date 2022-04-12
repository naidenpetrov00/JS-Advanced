const errors = {
    InvalidFace: 'Invalid face!',
    InvaliSuit: 'Invalid suit!'
}

const result = (function name(params) {
    const Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2663',
        DIAMONDS: '\u2666',
        CLUBS: '\u2665',
    }
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }
        set face(face) {
            if (validFaces.includes(face)) {
                this._face = face;
            } else {
                throw Error(errors.InvalidFace);
            }
        }

        get suit() {
            return this._suit;
        }
        set suit(suit) {
            if (Suits.hasOwnProperty(suit)) {
                this._suit = suit;
            } else {
                throw Error(errors.InvaliSuit);
            }
        }


    }

    return {
        Suits: Suits,
        Card: Card,
    }
}())

const Card = result.Card;
const Suits = result.Suits;

const card = new Card('Q', Suits.SPADES);
card.face = 'A';
card.suit = Suits.DIAMONDS;
try {
    const card2 = new Card('1', Suits.DIAMONDS);
} catch (e) {
    console.log(e);
}