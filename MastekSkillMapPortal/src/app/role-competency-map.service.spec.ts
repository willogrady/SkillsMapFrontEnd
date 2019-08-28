import { TestBed } from '@angular/core/testing';

import { RoleCompetencyMapService } from './role-competency-map.service';

describe('RoleCompetencyMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleCompetencyMapService = TestBed.get(RoleCompetencyMapService);
    expect(service).toBeTruthy();
  });
});
