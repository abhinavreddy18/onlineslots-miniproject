import { TestBed } from '@angular/core/testing';

import { FetchsuperService } from './fetchsuper.service';

describe('FetchsuperService', () => {
  let service: FetchsuperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchsuperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
