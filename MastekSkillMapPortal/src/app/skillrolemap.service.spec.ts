import { TestBed } from '@angular/core/testing';

import { SkillrolemapService } from './skillrolemap.service';

describe('SkillrolemapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillrolemapService = TestBed.get(SkillrolemapService);
    expect(service).toBeTruthy();
  });
});
