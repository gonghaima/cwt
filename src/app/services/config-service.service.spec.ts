import { TestBed, inject } from '@angular/core/testing';

import { ConfigServiceService } from './config-service.service';
import { HttpClient } from '@angular/common/http';

describe('ConfigServiceService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      providers: [ConfigServiceService, {provide: HttpClient, useValue: ''}]
    })
  );

  it('should be created', inject([ConfigServiceService], (service: ConfigServiceService) => {
    expect(service).toBeTruthy();
  }));
});
