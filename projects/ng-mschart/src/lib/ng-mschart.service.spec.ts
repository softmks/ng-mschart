import { TestBed } from '@angular/core/testing';

import { NgMschartService } from './ng-mschart.service';

describe('NgMschartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMschartService = TestBed.get(NgMschartService);
    expect(service).toBeTruthy();
  });
});
