import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardSet } from '../models/flashcardset';
import { FlashcardsService } from '../services/flashcards/flashcards.service';
import { Subscription } from 'rxjs';
import { StudysetCardComponent } from '../shared/studyset-card/studyset-card.component';
import { ActivatedRoute } from '@angular/router';

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
  private subscription: Subscription;
  id: number;
  private sub: any;

  constructor(private flashcardService: FlashcardsService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getData(this.id)
      // In a real app: dispatch action to load the details here.
    }
    );
  }

  ionViewDidEnter() {
    this.getData(this.id);
  }
  private getData(id: number) {
    this.flashcardService.getAllCards(id).subscribe(set => {
      this.flashcardSet = set;
      console.log(this.flashcardSet);
      this.quiz_title = set.quizTitle;
      this.total_count = set.flashcards.length;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.sub.unsubscribe();
  }

}
