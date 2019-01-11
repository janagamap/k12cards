import { Component, OnInit } from '@angular/core';
import {StudysetCardComponent} from '../studyset-card/studyset-card.component';
import { StudysetService } from 'src/app/services/studyset/studyset.service';
import { Studyset } from 'src/app/models/studyset';
import { NetworkService } from 'src/app/services/network/network.service';

@Component({
  selector: 'app-studyset-list',
  templateUrl: './studyset-list.component.html',
  styleUrls: ['./studyset-list.component.scss']
})
export class StudysetListComponent implements OnInit {

  constructor(private studySetListService: StudysetService,public network: NetworkService ) {
    this.getAvailableStudySets();
  }
  studySets: Array<Studyset>;

  ngOnInit() {
  }

   getAvailableStudySets() {
    console.log('View entered');
    this.studySetListService.getAllavailableStudySets().subscribe(sets=>{
      this.studySets=sets;
      console.log(this.studySets);
    });
    console.log('View after service');
  }

}
