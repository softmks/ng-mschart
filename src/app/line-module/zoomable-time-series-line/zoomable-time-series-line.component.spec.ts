import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableTimeSeriesLineComponent } from './zoomable-time-series-line.component';

describe('ZoomableTimeSeriesLineComponent', () => {
  let component: ZoomableTimeSeriesLineComponent;
  let fixture: ComponentFixture<ZoomableTimeSeriesLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomableTimeSeriesLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomableTimeSeriesLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
