class Deck {
    constructor() {
        this.deck = [];
    }

    reset() {
        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }

        return this;
    }

    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1 = new Player("Steve");
player1.draw(deck1).draw(deck1);
console.log(player1);
console.log(deck1);
