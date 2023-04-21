import { TestBed } from '@angular/core/testing';

import { BaseDatiService } from './base-dati.service';

describe('BaseDatiService', () => {
  let service: BaseDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
