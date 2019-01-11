import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Flashcard } from '../models/flashcard';
import { FlashcardSet } from '../models/flashcardset';
import { FlashcardsService } from '../services/flashcards/flashcards.service';
import { Subscription } from 'rxjs';
import { StudysetCardComponent } from '../shared/studyset-card/studyset-card.component';
import { ActivatedRoute } from '@angular/router';
import { FlashCardComponent } from './flash-card/flash-card.component';

@Component({
  selector: 'app-study-set',
  templateUrl: './study-set.page.html',
  styleUrls: ['./study-set.page.scss'],
})
export class StudySetPage implements OnInit, OnDestroy {


  flashCards: Array<Flashcard>;
  flashcardSet: FlashcardSet;

  quiz_title: String;
  total_count: number;

  private subscription: Subscription;
  id: number;
  private sub: any;

  constructor(private flashcardService: FlashcardsService, private route: ActivatedRoute) { }

  current_index = 0;
  flashCard: Flashcard = {id: 0, term: '', definition: ''};
  
  @ViewChild('flashcardcomponent') flashCardComp: FlashCardComponent;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getData(this.id);
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
       this.flashCards = set.flashcards;
     this.flashCard = set.flashcards[0];
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.sub.unsubscribe();
  }

  private incrementCurrentIndex () {
    if (this.current_index < this.total_count) {
      this.flashCardComp.flipped = false;
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
    this.flashCardComp.flipped = false;
    console.log('previous fn clicked' + this.current_index );
  }

  forward() {
    console.log('forward fn clicked forward start' + this.current_index );
    this.incrementCurrentIndex();
   if ( this.current_index < this.total_count) {
    this.flashCard =  this.flashCards[this.current_index];
   }
    console.log('forward fn clicked forward end' + this.current_index );

  }

}
