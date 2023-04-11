import { TestBed } from '@angular/core/testing';

import { ExpensentryService } from './expensentry.service';

describe('ExpensentryService', () => {
  let service: ExpensentryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensentryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
