import { Component, OnInit, Input } from '@angular/core';
import { Studyset } from 'src/app/models/studyset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studyset-card',
  templateUrl: './studyset-card.component.html',
  styleUrls: ['./studyset-card.component.scss']
})
export class StudysetCardComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() studyset: Studyset;

  ngOnInit() {
  }

  navigateToStudySet(id: number) {
    console.log('Study set clicked ' + id);
    this.router.navigateByUrl('/study-set/' + id);
  }

}
