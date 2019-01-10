import { TestBed } from '@angular/core/testing';

import { StudysetService } from './studyset.service';

describe('StudysetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudysetService = TestBed.get(StudysetService);
    expect(service).toBeTruthy();
  });
});
