import { TestBed } from '@angular/core/testing';

import { Locationsservice2Service } from './locationsservice2.service';

describe('Locationsservice2Service', () => {
  let service: Locationsservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Locationsservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
