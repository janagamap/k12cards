import { Component, OnInit, Input } from '@angular/core';
import { Studyset } from 'src/app/models/studyset';

@Component({
  selector: 'app-studyset-card',
  templateUrl: './studyset-card.component.html',
  styleUrls: ['./studyset-card.component.scss']
})
export class StudysetCardComponent implements OnInit {

  constructor() { }
  @Input() studyset: Studyset;

  ngOnInit() {
  }

  navigateToStudySet(id: number) {
    console.log('Study set clicked ' + id);
  }

}
