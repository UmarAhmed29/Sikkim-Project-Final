import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeeComponent } from './student-fee.component';

describe('StudentFeeComponent', () => {
  let component: StudentFeeComponent;
  let fixture: ComponentFixture<StudentFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
