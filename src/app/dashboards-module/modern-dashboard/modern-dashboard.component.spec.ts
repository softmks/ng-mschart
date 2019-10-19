import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernDashboardComponent } from './modern-dashboard.component';

describe('ModernDashboardComponent', () => {
  let component: ModernDashboardComponent;
  let fixture: ComponentFixture<ModernDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
