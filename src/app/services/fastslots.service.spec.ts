import { TestBed } from '@angular/core/testing';

import { FastslotsService } from './fastslots.service';

describe('FastslotsService', () => {
  let service: FastslotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastslotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
