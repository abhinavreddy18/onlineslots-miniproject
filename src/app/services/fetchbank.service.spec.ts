import { TestBed } from '@angular/core/testing';

import { FetchbankService } from './fetchbank.service';

describe('FetchbankService', () => {
  let service: FetchbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
