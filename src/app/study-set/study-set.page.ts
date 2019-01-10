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

  constructor(private flashcardService: FlashcardsService) { }
  ngOnInit() {
  }

   ionViewDidEnter() {
     this.flashcardService.getAllCards(1).subscribe(set => {
      this.flashcardSet = set;
     console.log(this.flashcardSet);
     this.quiz_title = set.quizTitle;
     this.total_count = set.flashcards.length;
    });
  }

}
