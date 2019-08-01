import { TestBed } from '@angular/core/testing';

import { SfiaService } from './sfia.service';

describe('SfiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SfiaService = TestBed.get(SfiaService);
    expect(service).toBeTruthy();
  });
});
