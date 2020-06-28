import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesRecordComponent } from './fees-record.component';

describe('FeesRecordComponent', () => {
  let component: FeesRecordComponent;
  let fixture: ComponentFixture<FeesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
