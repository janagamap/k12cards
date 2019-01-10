import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardSet } from '../models/flashcardset';
import { FlashcardsService } from '../services/flashcards/flashcards.service';

@Component({
  selector: 'app-study-set',
  templateUrl: './study-set.page.html',
  styleUrls: ['./study-set.page.scss'],
})
export class StudySetPage implements OnInit {


  flashCards: Array<Flashcard>;
  flashcardSet: FlashcardSet;

  quiz_title: String;
  total_count: number;
  current_index = 0;
  flashCard: Flashcard = {id: 0, term: '', definition: ''};
  constructor(private flashcardService: FlashcardsService) { }
  ngOnInit() {
  }

   async ionViewDidEnter() {
     await this.flashcardService.getAllCards(1).subscribe(set => {
      this.flashcardSet = set;
     console.log(this.flashcardSet);
     this.quiz_title = set.quizTitle;
     this.total_count = set.flashcards.length;
     this.flashCards = set.flashcards;
     this.flashCard = set.flashcards[0];
    });
  }

  private incrementCurrentIndex () {
    if (this.current_index < this.total_count) {
      this.current_index = this.current_index + 1;
    }
  }

  private decrementCurrentIndex() {
    if (this.current_index >= 1) {
      this.current_index = this.current_index - 1;
    }
  }

  previous() {
    console.log('previous function: ' + this.current_index);
    this.decrementCurrentIndex();
    this.flashCard =  this.flashCards[this.current_index];
    console.log('previous fn clicked' + this.current_index );
  }

  forward() {
    console.log('forward fn clicked' + this.current_index );
    this.incrementCurrentIndex();
   if ( this.current_index < this.total_count) {
    this.flashCard =  this.flashCards[this.current_index];
   }
    console.log('forward fn clicked' + this.current_index );
  }

}
