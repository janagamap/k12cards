import { Injectable } from '@angular/core';
import {Studyset} from '../../models/studyset';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudysetService {
  private baseUrl = 'https://s3.amazonaws.com/k12cards/studyset.json';

  constructor(private http: HttpClient) { }

getAllavailableStudySets(): Observable<Array<Studyset>> {
  return this.http.get(
    `${this.baseUrl}`)
    .pipe(map((res: any) => this.unpackStudySets(res)));
}

private unpackStudySets(res: any): Array<Studyset> {
  console.log(res);
  const studysets: Array<Studyset> = [];
  res.forEach(item => {
    const w = this.unpackStudySet(item);
    studysets.push(w);
  });
  return studysets;
}

private unpackStudySet(res: any): Studyset {
  return {
    id: res.id,
    title: res.title,
    description: res.description,
    items:res.items
  };
}
}
