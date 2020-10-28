import { TestBed } from '@angular/core/testing';

import { GetgpsdataService } from './getgpsdata.service';

describe('GetgpsdataService', () => {
  let service: GetgpsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgpsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
