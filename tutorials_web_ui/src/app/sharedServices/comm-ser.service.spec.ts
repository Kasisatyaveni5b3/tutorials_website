import { TestBed } from '@angular/core/testing';

import { CommSerService } from './comm-ser.service';

describe('CommSerService', () => {
  let service: CommSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
