import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncingChartLineComponent } from './syncing-chart-line.component';

describe('SyncingChartLineComponent', () => {
  let component: SyncingChartLineComponent;
  let fixture: ComponentFixture<SyncingChartLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncingChartLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncingChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
