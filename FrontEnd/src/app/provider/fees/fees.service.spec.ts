import { TestBed, inject } from '@angular/core/testing';

import { FeesService } from './fees.service';

describe('AttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesService]
    });
  });

  it('should be created', inject([FeesService], (service: FeesService) => {
    expect(service).toBeTruthy();
  }));
});
