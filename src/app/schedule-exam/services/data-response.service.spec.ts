import { TestBed } from '@angular/core/testing';

import { DataResponseService } from './data-response.service';

describe('DataResponseService', () => {
  let service: DataResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
