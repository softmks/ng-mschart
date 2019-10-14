import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMschartComponent } from './ng-mschart.component';

describe('NgMschartsComponent', () => {
  let component: NgMschartComponent;
  let fixture: ComponentFixture<NgMschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
