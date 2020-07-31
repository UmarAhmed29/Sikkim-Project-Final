import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAttendanceRecordComponent } from './teacher-attendance-record.component';

describe('TeacherAttendanceRecordComponent', () => {
  let component: TeacherAttendanceRecordComponent;
  let fixture: ComponentFixture<TeacherAttendanceRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAttendanceRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAttendanceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
