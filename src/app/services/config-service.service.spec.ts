import { TestBed, inject } from '@angular/core/testing';

import { ConfigServiceService } from './config-service.service';

describe('ConfigServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigServiceService]
    });
  });

  it('should be created', inject([ConfigServiceService], (service: ConfigServiceService) => {
    expect(service).toBeTruthy();
  }));
});
