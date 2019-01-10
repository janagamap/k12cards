import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Flashcard } from '../../models/flashcard';
import { FlashcardSet } from 'src/app/models/flashcardset';
@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {

  private baseUrl = 'https://s3.amazonaws.com/k12cards';

  constructor(private http: HttpClient) { }
  getAllCards(studysetId: number): Observable<FlashcardSet> {
    return this.http.get(
      `${this.baseUrl}/${studysetId}.json`)
      .pipe(map((res: any) => this.unpackFlashCards(res)));

  }
  private unpackFlashCards(res: any): FlashcardSet {
    console.log(res);
    const flashcardSet: FlashcardSet = {quizTitle: '', flashcards: []};
    const flashcards: Array<Flashcard> = [];
    flashcardSet.quizTitle = res.quiz_title;
    res.terms.forEach(item => {
      const w = this.unpackFlashcard(item);
      flashcards.push(w);
    });
    flashcardSet.flashcards = flashcards;
    return flashcardSet;
  }

  private unpackFlashcard(res: any): Flashcard {
    return {
      id: res.id,
      term: res.term,
      definition: res.definition
    };
  }

}
