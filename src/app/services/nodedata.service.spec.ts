import { TestBed } from '@angular/core/testing';

import { NodedataService } from './nodedata.service';

describe('NodedataService', () => {
  let service: NodedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
