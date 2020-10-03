import { TestBed } from '@angular/core/testing';

import { EmailsignatureApiService } from './emailsignature-api.service';

describe('EmailsignatureApiService', () => {
  let service: EmailsignatureApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsignatureApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
