import { TestBed } from '@angular/core/testing';

import { DisponibiliteService } from './disponibilite.service';

describe('DisponibiliteService', () => {
  let service: DisponibiliteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisponibiliteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
