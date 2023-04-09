import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
})

export class MemoComponent {
  
  
  cards = [
    {
      id: 1,
      name: 'earth',
      img: '/assets/earth.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 2,
      name: 'jupiter',
      img: '/assets/jupiter.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 3,
      name: 'mars',
      img: '/assets/mars.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 4,
      name: 'mercury',
      img: '/assets/mercury.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 5,
      name: 'saturn',
      img: '/assets/saturn.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 6,
      name: 'uranus',
      img: '/assets/uranus.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 7,
      name: 'earth',
      img: '/assets/earth.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 8,
      name: 'jupiter',
      img: '/assets/jupiter.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 9,
      name: 'mars',
      img: '/assets/mars.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 10,
      name: 'mercury',
      img: '/assets/mercury.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 11,
      name: 'saturn',
      img: '/assets/saturn.svg',
      flipped: false,
      matched: false,
    },
    {
      id: 12,
      name: 'uranus',
      img: '/assets/uranus.svg',
      flipped: false,
      matched: false,
    },
  ];

  constructor() {
    this.sort()
  }
  

  flipCard(card: any) {
    if (this.flippedCards().length === 2 || card.matched || card.flipped) {
      return
    }
    card.flipped = true;
    if (this.flippedCards().length === 2) {
      const [card1, card2] = this.flippedCards();
      if (card1.name === card2.name) {
        card1.matched = true;
        card2.matched = true;
        card1.img = '/assets/tick.svg';
        card2.img = '/assets/tick.svg';
      } else {
        setTimeout(() => {
          card1.flipped = false;
          card2.flipped = false;
        }, 1000);
      }
      if (card.matched || card.flipped || (this.flippedCards().length = 2)) {
      return;
    }
    }
  }

  flippedCards() {
    return this.cards.filter((c) => c.flipped && !c.matched);
  }

  sort() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  reset() {
    this.cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
      card.img = `/assets/${card.name}.svg`;
    });
    this.sort();
  }

}