import { TestBed } from '@angular/core/testing';

import { SoldierService } from './soldier.service';

describe('SoldierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoldierService = TestBed.get(SoldierService);
    expect(service).toBeTruthy();
  });
});
