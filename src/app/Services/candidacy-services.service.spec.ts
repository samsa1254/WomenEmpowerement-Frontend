import { TestBed } from '@angular/core/testing';

import { CandidacyServicesService } from './candidacy-services.service';

describe('CandidacyServicesService', () => {
  let service: CandidacyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidacyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
