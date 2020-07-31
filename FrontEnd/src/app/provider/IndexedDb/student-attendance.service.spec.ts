import { TestBed, inject } from '@angular/core/testing';

import { StudentAttendanceService } from './student-attendance.service';

describe('StudentAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentAttendanceService]
    });
  });

  it('should be created', inject([StudentAttendanceService], (service: StudentAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
