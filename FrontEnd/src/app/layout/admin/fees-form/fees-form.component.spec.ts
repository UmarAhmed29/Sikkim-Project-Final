import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesFormComponent } from './fees-form.component';

describe('FeesFormComponent', () => {
  let component: FeesFormComponent;
  let fixture: ComponentFixture<FeesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
