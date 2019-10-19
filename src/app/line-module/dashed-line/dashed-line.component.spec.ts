import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedLineComponent } from './dashed-line.component';

describe('DashedLineComponent', () => {
  let component: DashedLineComponent;
  let fixture: ComponentFixture<DashedLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashedLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
