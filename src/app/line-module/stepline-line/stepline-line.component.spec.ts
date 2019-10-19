import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteplineLineComponent } from './stepline-line.component';

describe('SteplineLineComponent', () => {
  let component: SteplineLineComponent;
  let fixture: ComponentFixture<SteplineLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteplineLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteplineLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
