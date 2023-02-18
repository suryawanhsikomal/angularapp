import { TestBed } from '@angular/core/testing';

import { StyleAssService } from './style-ass.service';

describe('StyleAssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleAssService = TestBed.get(StyleAssService);
    expect(service).toBeTruthy();
  });
});
