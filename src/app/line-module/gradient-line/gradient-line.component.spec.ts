import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientLineComponent } from './gradient-line.component';

describe('GradientLineComponent', () => {
  let component: GradientLineComponent;
  let fixture: ComponentFixture<GradientLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
