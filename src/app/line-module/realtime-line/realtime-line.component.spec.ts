import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeLineComponent } from './realtime-line.component';

describe('RealtimeLineComponent', () => {
  let component: RealtimeLineComponent;
  let fixture: ComponentFixture<RealtimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
