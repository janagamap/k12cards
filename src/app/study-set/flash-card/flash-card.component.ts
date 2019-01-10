import { Component, Input, OnInit } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards/flashcards.service';
import { Flashcard } from 'src/app/models/flashcard';
import { FlashcardSet } from 'src/app/models/flashcardset';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  flipped = false;
  flashCards: Array<Flashcard>;
  flashcardSet: FlashcardSet;

  @Input() flashCard: Flashcard;
  constructor() { }

  ngOnInit() {
  }

  toggle(event) {
    console.log('event: ' + event);
    console.log('About to flip:' + this.flipped);
    this.flipped = !this.flipped;
    console.log('Flipped:' + this.flipped);
  }
}
