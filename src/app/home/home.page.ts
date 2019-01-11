import { Component } from '@angular/core';
import { NetworkService } from '../services/network/network.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public network: NetworkService) {
  }
}
