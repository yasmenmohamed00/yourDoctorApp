import { TestBed } from '@angular/core/testing';

import { DrugapiService } from './drugapi.service';

describe('DrugapiService', () => {
  let service: DrugapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrugapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
