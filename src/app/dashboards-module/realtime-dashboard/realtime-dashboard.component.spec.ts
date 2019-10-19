import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDashboardComponent } from './realtime-dashboard.component';

describe('RealtimeDashboardComponent', () => {
  let component: RealtimeDashboardComponent;
  let fixture: ComponentFixture<RealtimeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
