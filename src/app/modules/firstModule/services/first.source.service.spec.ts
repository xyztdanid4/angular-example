import { TestBed } from '@angular/core/testing';

import { FirstSourceService } from './first.source.service';

describe('FirstSourceService', () => {
  let service: FirstSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
