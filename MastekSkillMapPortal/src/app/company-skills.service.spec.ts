import { TestBed } from '@angular/core/testing';

import { CompanySkillsService } from './company-skills.service';

describe('CompanySkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanySkillsService = TestBed.get(CompanySkillsService);
    expect(service).toBeTruthy();
  });
});
