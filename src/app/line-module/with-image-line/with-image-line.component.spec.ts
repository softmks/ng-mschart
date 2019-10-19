import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithImageLineComponent } from './with-image-line.component';

describe('WithImageLineComponent', () => {
  let component: WithImageLineComponent;
  let fixture: ComponentFixture<WithImageLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithImageLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithImageLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
