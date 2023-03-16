import { TestBed } from '@angular/core/testing';

import { EmpoyeehttpService } from './empoyeehttp.service';

describe('EmpoyeehttpService', () => {
  let service: EmpoyeehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoyeehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
