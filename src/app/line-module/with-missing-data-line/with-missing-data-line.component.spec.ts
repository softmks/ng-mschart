import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMissingDataLineComponent } from './with-missing-data-line.component';

describe('WithMissingDataLineComponent', () => {
  let component: WithMissingDataLineComponent;
  let fixture: ComponentFixture<WithMissingDataLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithMissingDataLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithMissingDataLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
