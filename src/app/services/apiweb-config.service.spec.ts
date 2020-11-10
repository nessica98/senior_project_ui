import { TestBed } from '@angular/core/testing';

import { APIWebConfigService } from './apiweb-config.service';

describe('APIWebConfigService', () => {
  let service: APIWebConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIWebConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
