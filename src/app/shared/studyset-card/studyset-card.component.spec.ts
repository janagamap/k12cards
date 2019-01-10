import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysetCardComponent } from './studyset-card.component';

describe('StudysetCardComponent', () => {
  let component: StudysetCardComponent;
  let fixture: ComponentFixture<StudysetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudysetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudysetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
