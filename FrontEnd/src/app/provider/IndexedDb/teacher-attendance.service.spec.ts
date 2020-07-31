import { TestBed, inject } from '@angular/core/testing';

import { TeacherAttendanceService } from './teacher-attendance.service';

describe('TeacherAttendanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherAttendanceService]
    });
  });

  it('should be created', inject([TeacherAttendanceService], (service: TeacherAttendanceService) => {
    expect(service).toBeTruthy();
  }));
});
