import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksRecordComponent } from './marks-record.component';

describe('MarksRecordComponent', () => {
  let component: MarksRecordComponent;
  let fixture: ComponentFixture<MarksRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
