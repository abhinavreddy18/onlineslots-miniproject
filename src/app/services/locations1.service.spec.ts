import { TestBed } from '@angular/core/testing';

import { Locations1Service } from './locations1.service';

describe('Locations1Service', () => {
  let service: Locations1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Locations1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
