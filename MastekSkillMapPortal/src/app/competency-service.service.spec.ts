import { TestBed } from '@angular/core/testing';

import { CompetencyServiceService } from './competency-service.service';

describe('CompetencyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetencyServiceService = TestBed.get(CompetencyServiceService);
    expect(service).toBeTruthy();
  });
});
