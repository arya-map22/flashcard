import { Component, computed, signal } from '@angular/core';
import { Card } from './card.interface';

@Component({
  selector: 'app-card',
  imports: [],
  providers: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  cards = dummyData;

  currentIndex = signal(0);
  card = computed(() => this.cards[this.currentIndex()]);
  showAnswer = signal(false);

  onNext() {
    if (this.currentIndex() + 1 < this.cards.length) {
      this.currentIndex.update((prev) => prev + 1);
      this.showAnswer.set(false);
    }
  }

  onPrevious() {
    if (this.currentIndex() - 1 >= 0) {
      this.currentIndex.update((prev) => prev - 1);
      this.showAnswer.set(false);
    }
  }

  onToggleAnswer() {
    this.showAnswer.update((prev) => !prev);
  }
}

const dummyData: Card[] = [
  {
    id: 'c1',
    question: 'What is the difference between Angular and React?',
    answer:
      'Angular is a full-fledged framework and React is just a UI library',
  },
  {
    id: 'c2',
    question: 'What is the benefit of using Typescript?',
    answer: 'Typechecking so that bug can be caught at development',
  },
];
