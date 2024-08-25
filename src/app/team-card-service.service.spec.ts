import { TestBed } from '@angular/core/testing';

import { TeamCardServiceService } from './team-card-service.service';

describe('TeamCardServiceService', () => {
  let service: TeamCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
