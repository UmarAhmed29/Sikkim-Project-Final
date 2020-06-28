import { TestBed, inject } from '@angular/core/testing';

import { ViewSchoolService } from './viewSchool.service';

describe('ViewSchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewSchoolService]
    });
  });

  it('should be created', inject([ViewSchoolService], (service: ViewSchoolService) => {
    expect(service).toBeTruthy();
  }));
});
