import { TestBed } from '@angular/core/testing';

import { KWDataService } from './kw-data.service';

describe('KWDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KWDataService = TestBed.get(KWDataService);
    expect(service).toBeTruthy();
  });
});
