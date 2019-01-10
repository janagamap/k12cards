import { Injectable } from '@angular/core';
import {Studyset} from '../../models/studyset';
import {studysets} from './studysetlist';

@Injectable({
  providedIn: 'root'
})
export class StudysetService {

  constructor() { }

getAllavailableStudySets(): Array<Studyset> {
  return studysets;
}

}
