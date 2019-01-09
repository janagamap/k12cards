import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudysetListComponent } from './studyset-list/studyset-list.component';

@NgModule({
  declarations: [StudysetListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StudysetListComponent
  ]
})
export class SharedModule { }
