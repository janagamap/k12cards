import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySetPage } from './study-set.page';

describe('StudySetPage', () => {
  let component: StudySetPage;
  let fixture: ComponentFixture<StudySetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudySetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudySetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
