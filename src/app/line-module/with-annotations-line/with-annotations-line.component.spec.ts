import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithAnnotationsLineComponent } from './with-annotations-line.component';

describe('WithAnnotationsLineComponent', () => {
  let component: WithAnnotationsLineComponent;
  let fixture: ComponentFixture<WithAnnotationsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithAnnotationsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithAnnotationsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
