import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDetailComponent } from './employees-detail.component';

describe('EmployeesDetailComponent', () => {
  let component: EmployeesDetailComponent;
  let fixture: ComponentFixture<EmployeesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
