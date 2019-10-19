import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmicLineComponent } from './logarithmic-line.component';

describe('LogarithmicLineComponent', () => {
  let component: LogarithmicLineComponent;
  let fixture: ComponentFixture<LogarithmicLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarithmicLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarithmicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
