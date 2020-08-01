import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailComponent } from './students-detail.component';

describe('EmployeesDetailComponent', () => {
  let component: StudentsDetailComponent;
  let fixture: ComponentFixture<StudentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
