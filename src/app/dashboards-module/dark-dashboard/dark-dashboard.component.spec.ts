import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkDashboardComponent } from './dark-dashboard.component';

describe('DarkDashboardComponent', () => {
  let component: DarkDashboardComponent;
  let fixture: ComponentFixture<DarkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
