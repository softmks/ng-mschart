import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrushLineComponent } from './brush-line.component';

describe('BrushLineComponent', () => {
  let component: BrushLineComponent;
  let fixture: ComponentFixture<BrushLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrushLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrushLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
