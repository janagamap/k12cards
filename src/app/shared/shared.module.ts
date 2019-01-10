import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { StudysetListComponent } from './studyset-list/studyset-list.component';
import { StudysetCardComponent } from './studyset-card/studyset-card.component';

@NgModule({
  declarations: [StudysetListComponent, StudysetCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    StudysetListComponent
  ]
})
export class SharedModule { }
