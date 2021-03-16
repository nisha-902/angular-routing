import { TestBed } from '@angular/core/testing';

import { KService } from './k.service';

describe('KService', () => {
  let service: KService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
