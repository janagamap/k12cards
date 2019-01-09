import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysetListComponent } from './studyset-list.component';

describe('StudysetListComponent', () => {
  let component: StudysetListComponent;
  let fixture: ComponentFixture<StudysetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudysetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudysetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
