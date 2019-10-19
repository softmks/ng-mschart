import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDataLabelsLineComponent } from './with-data-labels-line.component';

describe('WithDataLabelsLineComponent', () => {
  let component: WithDataLabelsLineComponent;
  let fixture: ComponentFixture<WithDataLabelsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDataLabelsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDataLabelsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
