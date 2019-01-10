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
     this.flashCard = set.flashcards[0];
    });
  }

  previous() {
    console.log('previous fn clicked');
  }

  forward() {
    console.log('forward fn clicked');
  }

}
