import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {

  flipped = false;


  constructor() { }

  ngOnInit() {
  }

  toggle(event) {
    console.log('event: ' + event);
    console.log('About to flip:' + this.flipped);
    this.flipped = !this.flipped;
    console.log('Flipped:' + this.flipped);
  }
}
