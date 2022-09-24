import { TestBed } from '@angular/core/testing';

import { FirstMockService } from './first.mock.service';

describe('FirstMockService', () => {
  let service: FirstMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
