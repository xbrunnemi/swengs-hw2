import { TestBed } from '@angular/core/testing';

import { ArmofserviceService } from './armofservice.service';

describe('ArmofserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmofserviceService = TestBed.get(ArmofserviceService);
    expect(service).toBeTruthy();
  });
});
