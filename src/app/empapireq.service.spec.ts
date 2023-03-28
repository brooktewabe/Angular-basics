import { TestBed } from '@angular/core/testing';

import { EmpapireqService } from './empapireq.service';

describe('EmpapireqService', () => {
  let service: EmpapireqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpapireqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
