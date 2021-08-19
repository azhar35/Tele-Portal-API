import { TestBed } from '@angular/core/testing';

import { UserplansService } from './userplans.service';

describe('UserplansService', () => {
  let service: UserplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
