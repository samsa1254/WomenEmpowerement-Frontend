import { TestBed } from '@angular/core/testing';

import { OfferServicesService } from './offer-services.service';

describe('OfferServicesService', () => {
  let service: OfferServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
