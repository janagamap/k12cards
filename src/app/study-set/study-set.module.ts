import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudySetPage } from './study-set.page';
import { FlashCardComponent } from './flash-card/flash-card.component';

const routes: Routes = [
  {
    path: '',
    component: StudySetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudySetPage, FlashCardComponent]
})
export class StudySetPageModule {}
