import { TestBed } from '@angular/core/testing';

import { AdminService2Service } from './admin-service2.service';

describe('AdminService2Service', () => {
  let service: AdminService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
