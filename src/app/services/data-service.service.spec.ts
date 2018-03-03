import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data-service.service';
import { ConfigServiceService } from './config-service.service';
import { HttpClient } from '@angular/common/http';

describe('DataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService,
        { provide: ConfigServiceService, useValue: '' },
        { provide: HttpClient, useValue: '' },
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
